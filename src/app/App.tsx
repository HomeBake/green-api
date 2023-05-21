import { Outlet, ReactLocation, Router } from '@tanstack/react-location';

import { AppProvider } from './app-provider';
import { routes } from './routes';

const location = new ReactLocation();

function App() {
  return (
    <AppProvider>
      <Router location={location} routes={routes}>
        <Outlet />
      </Router>
    </AppProvider>
  );
}

export default App;
