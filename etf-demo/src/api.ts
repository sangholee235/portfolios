// 데모용 mock API. 실제 백엔드(FastAPI) 없이, 실계좌 노출 없이 대시보드 UI를
// 그대로 체험할 수 있게 더미데이터로 응답한다. 다른 프로젝트들의 MSW와 같은 역할.
//
// 실제 api.ts(Tossapi/frontend/src/api.ts)와 함수 시그니처를 똑같이 맞춰서,
// AutoPage.tsx/PortfolioPanel.tsx 코드는 한 줄도 안 고치고 그대로 재사용한다.
import type {
  Account, BotConfig, BotPreview, BotStatus, BotLog, BuyingPower,
  EtfCatalogItem, EtfSearchItem, Holdings, Order, OrdersPage, PortfolioProgress,
} from './types'

const delay = (ms = 300) => new Promise((r) => setTimeout(r, ms))

// ---------------- 더미 시세(원) ----------------
const PRICE: Record<string, number> = {
  '069500': 41_820,  // KODEX 200
  '379810': 25_960,  // KODEX 미국나스닥100
  '360750': 18_640,  // TIGER 미국S&P500
  '133690': 108_450, // TIGER 미국나스닥100
  '229200': 8_215,   // KODEX 코스닥150
  '381180': 15_930,  // TIGER 미국필라델피아반도체나스닥
  '449180': 12_380,  // TIGER 미국배당다우존스
  '490090': 11_050,  // TIGER 미국AI빅테크10
  '102110': 41_760,  // TIGER 200
  '379800': 18_720,  // KODEX 미국S&P500
}
const NAME: Record<string, string> = {
  '069500': 'KODEX 200', '379810': 'KODEX 미국나스닥100', '360750': 'TIGER 미국S&P500',
  '133690': 'TIGER 미국나스닥100', '229200': 'KODEX 코스닥150',
  '381180': 'TIGER 미국필라델피아반도체나스닥', '449180': 'TIGER 미국배당다우존스',
  '490090': 'TIGER 미국AI빅테크10', '102110': 'TIGER 200', '379800': 'KODEX 미국S&P500',
}

// ---------------- 메모리 상태 (버튼 눌러보면 반응하도록) ----------------
let config: BotConfig = {
  symbol: '069500', symbol_name: 'KODEX 200',
  portfolio_mode: true,
  portfolio: [
    { symbol: '069500', name: 'KODEX 200', weight: 60 },
    { symbol: '379810', name: 'KODEX 미국나스닥100', weight: 40 },
  ],
  fill_mode: 'weight',
  wait_for_underweight: false,
  quantity_per_buy: 1, buy_amount_krw: 0, discount_pct: 0.005,
  fallback_after_misses: 5, tick_size: 5,
  daily_budget_krw: 50_000, total_budget_krw: 0, require_market_open: true,
  schedule_enabled: true, schedule_time: '09:05',
  dry_run: true,   // 데모는 항상 모의 — 실주문 아님을 UI에서도 드러냄
  enabled: true,
}

let invested: Record<string, number> = { '069500': 612_000, '379810': 358_000 } // 매입금액
let qty: Record<string, number> = { '069500': 14, '379810': 13 }

const now = () => new Date().toISOString()
const minutesAgo = (m: number) => new Date(Date.now() - m * 60_000).toISOString()

let logs: BotLog[] = [
  { ts: minutesAgo(130), trade_date: today(), mode: 'DRY_RUN', action: 'MARKET_BUY', reason: '그리디 리밸런싱: 379810 1주 (목표비중 맞춤, 25,960원 기준)', symbol: '379810', quantity: 1, price: 25960, filled: true, order_id: 'DEMO-0001' },
  { ts: minutesAgo(70), trade_date: today(), mode: 'DRY_RUN', action: 'SKIP', reason: '오늘 살 게 없음 — 이미 목표 비중 도달', symbol: null as unknown as string, quantity: 0, price: null, filled: null },
  { ts: minutesAgo(10), trade_date: today(), mode: 'DRY_RUN', action: 'MARKET_BUY', reason: '그리디 리밸런싱: 069500 1주 (목표비중 맞춤, 41,820원 기준)', symbol: '069500', quantity: 1, price: 41820, filled: true, order_id: 'DEMO-0002' },
]

function today() {
  return new Date().toISOString().slice(0, 10)
}

function totalInvested() {
  return Object.values(invested).reduce((s, v) => s + v, 0)
}

function progress(): PortfolioProgress[] {
  const items = config.portfolio.filter((p) => p.weight > 0)
  const totalW = items.reduce((s, p) => s + Number(p.weight), 0) || 1
  const totalInv = totalInvested() || 1
  return items.map((p) => ({
    symbol: p.symbol, name: p.name,
    targetWeight: Number(p.weight) / totalW,
    currentWeight: (invested[p.symbol] ?? 0) / totalInv,
    investedKrw: invested[p.symbol] ?? 0,
  }))
}

function holdingsSnapshot(): Holdings {
  const items = config.portfolio.map((p) => {
    const q = qty[p.symbol] ?? 0
    const last = PRICE[p.symbol] ?? 0
    const purchase = invested[p.symbol] ?? 0
    const amount = q * last
    const pl = amount - purchase
    return {
      symbol: p.symbol, name: p.name, currency: 'KRW',
      quantity: String(q), lastPrice: String(last),
      averagePurchasePrice: q ? String(Math.round(purchase / q)) : '0',
      marketValue: { purchaseAmount: String(purchase), amount: String(amount), amountAfterCost: String(amount) },
      profitLoss: { amount: String(pl), rate: String(purchase ? pl / purchase : 0), amountAfterCost: String(pl), rateAfterCost: String(purchase ? pl / purchase : 0) },
    }
  })
  const totalAmount = items.reduce((s, it) => s + Number(it.marketValue.amount), 0)
  const totalPurchase = items.reduce((s, it) => s + Number(it.marketValue.purchaseAmount), 0)
  const totalPl = totalAmount - totalPurchase
  return {
    marketValue: { amount: { krw: String(totalAmount), usd: null } },
    profitLoss: { amount: { krw: String(totalPl), usd: null }, rate: String(totalPurchase ? totalPl / totalPurchase : 0) },
    items,
  }
}

function isMarketOpenNow(): boolean {
  const kst = new Date(Date.now() + 9 * 60 * 60_000)
  const day = kst.getUTCDay()
  if (day === 0 || day === 6) return false
  const minutes = kst.getUTCHours() * 60 + kst.getUTCMinutes()
  return minutes >= 9 * 60 && minutes <= 15 * 60 + 30
}

export const api = {
  brokers: async () => { await delay(150); return { brokers: ['kiwoom'], default: 'kiwoom' } },

  accounts: async (_broker?: string): Promise<Account[]> => {
    await delay()
    return [{ accountNo: '1234-5678-90(모의)', accountSeq: 1, accountType: 'BROKERAGE' }]
  },

  exchangeRate: async () => { await delay(100); return { rate: '1350' } },

  holdings: async (_broker?: string): Promise<Holdings> => { await delay(); return holdingsSnapshot() },

  buyingPower: async (_currency?: string, _broker?: string): Promise<BuyingPower> => {
    await delay(); return { currency: 'KRW', cashBuyingPower: '87340' }
  },

  openOrders: async (_broker?: string): Promise<OrdersPage> => { await delay(200); return { orders: [], nextCursor: null, hasNext: false } },

  closedOrders: async (_broker?: string): Promise<OrdersPage> => {
    await delay(300)
    const orders: Order[] = logs.filter((l) => l.action === 'MARKET_BUY').map((l, i) => ({
      orderId: l.order_id ?? `DEMO-${i}`,
      symbol: l.symbol, side: 'BUY', orderType: 'MARKET', status: 'FILLED',
      price: null, quantity: String(l.quantity), currency: 'KRW', orderedAt: l.ts,
      execution: { filledQuantity: String(l.quantity), averageFilledPrice: String(l.price ?? '') },
    }))
    return { orders, nextCursor: null, hasNext: false }
  },

  cancelOrder: async (orderId: string, _broker?: string) => { await delay(); return { orderId, status: 'CANCELED' } },

  botScheduler: async () => {
    await delay(100)
    return { alive: true, threadAlive: true, lastTick: minutesAgo(0), secondsSinceTick: 12 }
  },

  botRealtime: async () => { await delay(100); return { connected: true, lastError: null, broker: 'kiwoom' } },

  marketStatus: async (_broker?: string) => { await delay(100); return { open: isMarketOpenNow() } },

  botStatus: async (_broker?: string): Promise<BotStatus> => {
    await delay()
    return {
      config,
      state: { totalInvestedKrw: totalInvested(), totalFilledQty: Object.values(qty).reduce((s, v) => s + v, 0), consecutiveMisses: 0, lastTradeDate: today(), logs },
    }
  },

  botPreview: async (_broker?: string): Promise<BotPreview> => {
    await delay()
    const prog = progress()
    const under = prog.slice().sort((a, b) => (b.targetWeight - b.currentWeight) - (a.targetWeight - a.currentWeight))[0]
    const sym = under?.symbol ?? config.portfolio[0]?.symbol
    const price = PRICE[sym] ?? 0
    return {
      dryRun: config.dry_run, enabled: config.enabled, dailyBudgetKrw: config.daily_budget_krw,
      progress: prog, fillMode: config.fill_mode, waterfall: [],
      hasTarget: true, symbol: sym, name: NAME[sym] ?? sym,
      action: 'MARKET_BUY', quantity: 1, price: null, lastPrice: price, estCost: price,
      decisionReason: '1개 종목 매수 예정 (목표비중 그리디 리밸런싱, 시장가)',
      plan: [{ symbol: sym, name: NAME[sym] ?? sym, quantity: 1, price, estCost: price }],
      willTrade: true, blockReason: null, cashBuyingPower: 87_340, warnings: [],
    }
  },

  botCatalog: async (_broker?: string): Promise<EtfCatalogItem[]> => {
    await delay()
    const CATALOG = ['069500', '102110', '229200', '360750', '379800', '133690', '379810', '381180', '449180', '490090']
    return CATALOG.map((symbol) => ({
      symbol, name: NAME[symbol], category: '데모',
      tax: (symbol === '069500' || symbol === '102110' || symbol === '229200' ? 'exempt' : 'taxed') as 'exempt' | 'taxed',
      lastPrice: String(PRICE[symbol]),
    }))
  },

  botCatalogSearch: async (q: string, _broker?: string): Promise<EtfSearchItem[]> => {
    await delay(250)
    const ql = q.trim().toLowerCase()
    if (ql.length < 2) return []
    return Object.entries(NAME)
      .filter(([sym, name]) => name.toLowerCase().includes(ql) || sym.includes(ql))
      .map(([symbol, name]) => ({ symbol, name, market: 'KOSPI', lastPrice: String(PRICE[symbol]) }))
  },

  botRun: async (_broker?: string) => {
    await delay(500)
    const prog = progress()
    const under = prog.slice().sort((a, b) => (b.targetWeight - b.currentWeight) - (a.targetWeight - a.currentWeight))[0]
    const sym = under?.symbol ?? config.portfolio[0]?.symbol
    const price = PRICE[sym] ?? 0
    invested[sym] = (invested[sym] ?? 0) + price
    qty[sym] = (qty[sym] ?? 0) + 1
    const log: BotLog = {
      ts: now(), trade_date: today(), mode: config.dry_run ? 'DRY_RUN' : 'LIVE', action: 'MARKET_BUY',
      reason: `그리디 리밸런싱: ${sym} 1주 (목표비중 맞춤, ${price.toLocaleString()}원 기준)`,
      symbol: sym, quantity: 1, price, filled: true, order_id: `DEMO-${logs.length + 1}`,
    }
    logs = [...logs, log]
    return { mode: log.mode, enabled: config.enabled, symbol: sym, decision: { action: 'MARKET_BUY', price, reason: log.reason }, filled: true }
  },

  botPatchConfig: async (patch: Partial<BotConfig>, _broker?: string): Promise<BotConfig> => {
    await delay()
    config = { ...config, ...patch }
    return config
  },

  botLogs: async (limit = 200, _broker?: string): Promise<BotLog[]> => { await delay(); return logs.slice(-limit) },
}
