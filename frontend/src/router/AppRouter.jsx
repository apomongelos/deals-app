import { Route, Routes } from 'react-router-dom';

import { DealsRoutes } from '../deals';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="/*"
          element={
            <PublicRoute>
              <DealsRoutes />
            </PublicRoute>
          }
        />
      </Routes>
    </>
  );
};
