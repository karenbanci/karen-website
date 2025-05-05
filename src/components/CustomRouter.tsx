import React, { useLayoutEffect, useState } from 'react';
import { Router } from 'react-router-dom';
import { BrowserHistory, createBrowserHistory } from 'history';

// Create a browser history that we can use and modify
export const history = createBrowserHistory();

interface CustomRouterProps {
  history: BrowserHistory;
  children: React.ReactNode;
}

/**
 * A custom router that forces re-renders when the route changes
 * This helps ensure that content updates properly
 */
const CustomRouter: React.FC<CustomRouterProps> = ({ history, children }) => {
  const [state, setState] = useState({
    action: history.action,
    location: history.location
  });

  useLayoutEffect(() => {
    // Listen for history changes and update state
    // which will trigger a re-render
    const unlisten = history.listen(setState);
    return () => {
      unlisten();
    };
  }, [history]);

  return (
    <Router
      navigator={history}
      location={state.location}
      navigationType={state.action}
    >
      {children}
    </Router>
  );
};

export default CustomRouter; 