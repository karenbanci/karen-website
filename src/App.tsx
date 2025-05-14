import React, { Suspense } from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageWrapper from "./components/PageWrapper";
import { SceneProvider } from "./experience/Scene";
import { useLocation } from "react-router-dom";

// Create a loading component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500"></div>
  </div>
);
const DebugRouter = ({ children }: { children: any }) => {
  const location = useLocation();
  if (process.env.NODE_ENV === "development") {
    console.log(
      `Route: ${location.pathname}${location.search}, State: ${JSON.stringify(
        location.state
      )}`
    );
  }

  return children;
};

function App() {
  return (
    <React.StrictMode>
      <HashRouter>
        <SceneProvider>
          <div className="App min-h-screen relative flex flex-col">
            <Navbar />
            <div className="flex-grow">
              <Suspense fallback={<LoadingFallback />}>
                <PageWrapper>
                  <DebugRouter>
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/projects" element={<Projects />} />
                      <Route path="/project/:id" element={<ProjectDetail />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/contact" element={<Contact />} />
                      <Route element={<NotFound />} />
                    </Routes>
                  </DebugRouter>
                </PageWrapper>
              </Suspense>
            </div>
            <Footer />
          </div>
        </SceneProvider>
      </HashRouter>
    </React.StrictMode>
  );
}

export default App;
