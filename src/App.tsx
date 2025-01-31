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

// Skeleton de base pour les autres pages en attendant leurs skeletons spécifiques
const DefaultSkeleton = () => (
  <div className="min-h-screen p-8">
    <Skeleton className="w-full h-[200px] mb-8" />
    <div className="space-y-4">
      <Skeleton className="w-3/4 h-8" />
      <Skeleton className="w-full h-32" />
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
