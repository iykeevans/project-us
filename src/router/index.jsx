import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Fallback from "../utils/fallback";
import ErrorBoundary from "../utils/error-boundary";

const Login = lazy(() => import("../modules/login"));

function Router() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Fallback />}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </ErrorBoundary>
  );
}

export default Router;
