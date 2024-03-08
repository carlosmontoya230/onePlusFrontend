import { Outlet } from "react-router-dom";
import LayoutApp from "../../components/layouts/LayoutApp";

function PageApp() {
  return (
    <LayoutApp>
      <Outlet />
    </LayoutApp>
  );
}

export default PageApp;
