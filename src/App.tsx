import { ThemeProvider } from 'next-themes'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from "@/components/Navbar"
import { HomeButton } from "@/components/HomeButton"
import Home from './pages/Home'
import Projects from './pages/Projects'

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Router>
        <div className="min-h-screen bg-background text-foreground">
          <Navbar />
          <HomeButton />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  )
}
