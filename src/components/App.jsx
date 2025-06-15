import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout.jsx';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage.jsx';
import CatalogDetailsPage from '../pages/CatalogDetailsPage/CatalogDetailsPage.jsx';
import Loader from './loader/Loader.jsx';

const HomePage = lazy(() => import('../pages/HomePage/HomePage.jsx'));
const CatalogPage = lazy(() => import('../pages/CatalogPage/CatalogPage.jsx'));

function App() {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/catalog/:id" element={<CatalogDetailsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
