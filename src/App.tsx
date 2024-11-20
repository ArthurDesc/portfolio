import { ThemeProvider } from 'next-themes'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { Navbar } from "@/components/Navbar"
import { HomeButton } from "@/components/HomeButton"
import Home from './pages/Home'
import Projects from './pages/Projects'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

const AppContent = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="relative min-h-screen bg-background">
      <Navbar />
      {!isHomePage && <HomeButton />}
      <main className="w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  )
}
