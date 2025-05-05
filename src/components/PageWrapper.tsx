import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

type PageWrapperProps = {
  children: React.ReactNode;
};

/**
 * A wrapper component for pages to ensure consistent behavior
 * across route changes and proper rendering
 */
const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  const location = useLocation();
  const [isReady, setIsReady] = useState(false);
  
  useEffect(() => {
    // Reset state when location changes
    setIsReady(false);
    
    // Force a reflow/repaint using a timeout
    const timer = setTimeout(() => {
      setIsReady(true);
      // Scroll to top on page change
      window.scrollTo(0, 0);
    }, 10);
    
    return () => clearTimeout(timer);
  }, [location.pathname]);
  
  if (!isReady) {
    return <div className="min-h-screen py-20 px-4 md:px-8">Loading...</div>;
  }
  
  return (
    <div className="page-wrapper">
      {children}
    </div>
  );
};

export default PageWrapper; 