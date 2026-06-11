import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import publicRoutes
  from "./routes/public.routes";

import privateRoutes
  from "./routes/private.routes";

import RouteMiddleware
  from "./routes/routes.middleware";
import AppLayout from "./layouts/AppLayout";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* Public Routes */}
        <Route
          path="/"
          element={
            (
              <Navigate
                to="/login"
                replace
              />
            )
          }
        />

        {publicRoutes.map(
          (route) => (

            <Route
              key={route.path}

              path={route.path}

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

              path={route.path}

              element={

                <RouteMiddleware
                  module={route.module}
                  permissions={route.permissions}
                >

                  <AppLayout>

                    {route.element}

                  </AppLayout>

                </RouteMiddleware>

              }
            />

          )
        )}

        {/* Access Denied */}

        <Route
          path="/access-denied"

          element={

            <div className="min-h-screen flex items-center justify-center">

              <h1 className="text-2xl font-semibold">
                Access Denied
              </h1>

            </div>

          }
        />

        {/* Not Found */}

        <Route
          path="*"

          element={

            <div className="min-h-screen flex items-center justify-center">

              <h1 className="text-2xl font-semibold">
                Page Not Found
              </h1>

            </div>

          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;