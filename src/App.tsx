import { AuthProvider } from "./context/AuhContext";
import RoutesApp from "./routers/Routers";

function App() {
  return (
    <div className="bg-gradient-to-t from-black to-sky-950">
      <AuthProvider>
        <RoutesApp></RoutesApp>
      </AuthProvider>
    </div>
  );
}

export default App;
