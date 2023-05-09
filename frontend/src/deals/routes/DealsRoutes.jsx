import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar, Footer } from '../../ui';
import { DealPage, SearchPage } from '../pages';

import './Container.css';

export const DealsRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="deals" element={<DealPage />} />

          <Route path="search" element={<SearchPage />} />
          {/* <Route path="hero/:id" element={<HeroPage />} /> */}

          <Route path="/" element={<Navigate to="/deals" />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
};
