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
import { Skeleton } from '@/components/ui/skeleton';
import '@/styles/shared.css';

// Skeleton simplifié pour les autres pages
const DefaultSkeleton = () => (
  <div className="min-h-screen p-4 sm:p-8">
    <div className="max-w-7xl mx-auto space-y-8">
      <Skeleton className="w-full h-24 bg-zinc-800" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[...Array(4)].map((_, i) => (
          <Skeleton key={i} className="h-48 bg-zinc-800" />
        ))}
      </div>
    </div>
  </div>
);

const AppContent = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Fonction pour déterminer quel skeleton afficher selon la route
  const getSkeletonForRoute = (pathname: string) => {
    switch (pathname) {
      case '/':
        return <HomeSkeleton />;
      // Ajoutez ici d'autres skeletons spécifiques quand ils seront créés
      // case '/projects':
      //   return <ProjectsSkeleton />;
      // case '/education':
      //   return <EducationSkeleton />;
      default:
        return <DefaultSkeleton />;
    }
  };

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
              <Suspense fallback={<DefaultSkeleton />}>
                <Projects />
              </Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <Suspense fallback={<DefaultSkeleton />}>
                <ContactPage />
              </Suspense>
            }
          />
          <Route
            path="/education"
            element={
              <Suspense fallback={<DefaultSkeleton />}>
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
