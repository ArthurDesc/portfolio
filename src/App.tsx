import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import { Navbar } from '@/components/Navbar';
import { HomeButton } from '@/components/HomeButton';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from 'next-themes';
import { Footer } from '@/components/Footer';
import { Home, Projects, Education } from '@/utils/lazyComponents';
import ContactPage from '@/pages/contact';

// Composant de chargement
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[50vh]">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-violet-500"></div>
  </div>
);

const AppContent = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="relative min-h-screen bg-background flex flex-col">
      <Navbar />
      {!isHomePage && <HomeButton />}
      <main className="flex-grow">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/education" element={<Education />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
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
