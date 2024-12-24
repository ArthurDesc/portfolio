import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from '@/pages/Home';
import Projects from '@/pages/Projects';
import ContactPage from '@/pages/contact';
import Education from '@/pages/Education';
import { Navbar } from '@/components/Navbar';
import { HomeButton } from '@/components/HomeButton';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from 'next-themes';

const AppContent = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="relative min-h-screen bg-background">
      <Navbar />
      {!isHomePage && <HomeButton />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/education" element={<Education />} />
      </Routes>
      <Toaster />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} forcedTheme="dark">
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
