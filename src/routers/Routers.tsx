import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from "../pages/out/LoginPage";
import { useContext } from "react";
import { AuthContext } from "../context/AuhContext";
import PageHome from "../pages/in/PageHome";
import PageMovies from "../pages/in/PageMovies";
import PageApp from "../pages/in/PageApp";
import PageMovie from "../pages/in/PageMovieDetails";
import SignUpPage from "../pages/out/singUpPage";
import PageCategory from "../pages/in/PageCategory";

function RoutesApp() {
  const { authState } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            !authState.isAuthenticated ? (
              <LoginPage />
            ) : (
              <Navigate to="/app/home" replace />
            )
          }
        />
        <Route
          path="/login"
          element={
            !authState.isAuthenticated ? (
              <LoginPage />
            ) : (
              <Navigate to="/app/home" replace />
            )
          }
        />
        <Route
          path="/sign-up"
          element={
            !authState.isAuthenticated ? (
              <SignUpPage />
            ) : (
              <Navigate to="/app/home" replace />
            )
          }
        />
        <Route
          path="/app"
          element={
            authState.isAuthenticated ? (
              <PageApp />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        >
          <Route path="home" element={<PageHome />} />
          <Route path="movies" element={<PageMovies />} />
          <Route path="category/:name/:genresId" element={<PageCategory />} />
          <Route path="movie/:movieId" element={<PageMovie />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default RoutesApp;
