import React, { Suspense } from 'react';
<<<<<<< HEAD
import { Routes, Route, useLocation, HashRouter, Link } from 'react-router-dom';
=======
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
>>>>>>> 9c23fd4c91be6de63e1cda82d411416ba91f0b91
import CustomRouter, { history } from './components/CustomRouter';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageWrapper from './components/PageWrapper';
import { SceneProvider } from './experience/Scene';

// Create a loading component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500"></div>
  </div>
);

// Wrapper component to handle location and provide the scene
function AppContent() {
  const location = useLocation();

  return (
    <SceneProvider key={location.pathname}>
        <div className="App min-h-screen relative flex flex-col">
          <Navbar />
          <div className="flex-grow">
            <Suspense fallback={<LoadingFallback />}>
              <PageWrapper>
                <Routes location={location}>
                  <Route path="/" element={<Home />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/project/:id" element={<ProjectDetail />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </PageWrapper>
            </Suspense>
          </div>
          <Footer />
        </div>
      </SceneProvider>

  );
}

function App() {
  return (
    <React.StrictMode>
<<<<<<< HEAD
       <HashRouter>
        <AppContent />
       </HashRouter>
=======
      <Router>
        <AppContent />
      </Router>
>>>>>>> 9c23fd4c91be6de63e1cda82d411416ba91f0b91
    </React.StrictMode>
  );
}

export default App;
