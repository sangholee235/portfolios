import { RouterProvider, useRouter, segments } from './router'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Resume from './pages/Resume'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Contact from './pages/Contact'

function Screen() {
  const { path } = useRouter()
  const seg = segments(path)

  let page
  if (seg.length === 0) page = <Hero />
  else if (seg[0] === 'resume') page = <Resume />
  else if (seg[0] === 'projects' && seg[1]) page = <ProjectDetail id={seg[1]} />
  else if (seg[0] === 'projects') page = <Projects />
  else if (seg[0] === 'contact') page = <Contact />
  else page = <Hero />

  return page
}

export default function App() {
  return (
    <RouterProvider>
      <div className="bg-[#070709] min-h-screen text-white">
        <Screen />
        <Footer />
      </div>
    </RouterProvider>
  )
}
