import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import publicRoutes
from "./routes/public.routes";

import privateRoutes
from "./routes/private.routes";
import RouteMiddleware from "./routes/routes.middleware";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* Public Routes */}

        {publicRoutes.map(
          (route) => (
            <Route
              key={route.path}

              path={
                route.path
              }

              element={
                route.element
              }
            />
          )
        )}

        {/* Private Routes */}

        {privateRoutes.map(
          (route) => (
            <Route
              key={route.path}

              path={
                route.path
              }

              element={
              <RouteMiddleware
  module={route.module}
  permissions={route.permissions}
>
  {route.element}
</RouteMiddleware>
              }
            />
          )
        )}

        {/* 404 */}

        <Route
          path="*"

          element={
            <div>
              Not Found
            </div>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;