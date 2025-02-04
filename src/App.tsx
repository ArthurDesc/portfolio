import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import { Navbar } from '@/components/Navbar';
import { HomeButton } from '@/components/HomeButton';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from 'next-themes';
import { Footer } from '@/components/Footer';
import { Home, Projects, Education } from '@/utils/lazyComponents';
import ContactPage from '@/pages/contact';
import { HomeSkeleton } from '@/components/skeletons/HomeSkeleton';
import '@/styles/shared.css';

// Fallback simple pour les pages statiques
const StaticPageFallback = () => (
  <div className="min-h-screen bg-background" />
);

const AppContent = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="relative min-h-screen bg-background flex flex-col">
      <Navbar />
      {!isHomePage && <HomeButton />}
      <main className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<HomeSkeleton />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/projects"
            element={
              <Suspense fallback={<StaticPageFallback />}>
                <Projects />
              </Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <Suspense fallback={<StaticPageFallback />}>
                <ContactPage />
              </Suspense>
            }
          />
          <Route
            path="/education"
            element={
              <Suspense fallback={<StaticPageFallback />}>
                <Education />
              </Suspense>
            }
          />
        </Routes>
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
