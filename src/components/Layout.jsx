import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './navigation/Navigation';

const Layout = () => {
  return (
    <div>
      <Navigation />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
