import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { LoginPage } from "../pages/out/LoginPage";
import { useContext } from "react";
import { AuthContext } from "../context/AuhContext";
import PageHome from "../pages/in/PageHome";
import PageMovies from "../pages/in/PageMovies";
import PageApp from "../pages/in/PageApp";
import PageMovie from "../pages/in/PageMovieDetails";

function RoutesApp() {
  const { authState } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>I'm Main page</h1>} />
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
          <Route path="movie/:movieId" element={<PageMovie />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default RoutesApp;
