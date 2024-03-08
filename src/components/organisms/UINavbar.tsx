import { useContext, useState } from "react";
import UIIcon from "../atoms/UIIcon";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuhContext";

function UINavbar() {
  const { setAuthState } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const logOut = () => {
    localStorage.clear();
    setAuthState({ isAuthenticated: false, user: null });
  };

  return (
    <header className="!bg-transparent">
      <nav className="text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link to={"home"}>
                <div className="flex items-center">
                  <img
                    className="h-8 w-auto"
                    src="/assets/logo/logo-one.webp"
                    alt="Logo"
                  />
                  <span className="ml-2 text-2xl font-semibold">Plus</span>
                </div>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <ul className="flex justify-start items-center gap-4">
                  <Link to={"home"}>
                    <li className="p-4 cursor-pointer text-sm flex justify-start items-center gap-2 rounded-xl hover:bg-gray-100 hover:bg-opacity-25">
                      Home
                    </li>
                  </Link>
                  <Link to={"movies"}>
                    <li className="p-4 cursor-pointer text-sm flex justify-start items-center gap-2 rounded-xl hover:bg-gray-100 hover:bg-opacity-25">
                      <span>Peliculas</span>
                    </li>
                  </Link>
                  <Link to={"categories"}>
                    <li className="p-4 cursor-pointer text-sm flex justify-start items-center gap-2 rounded-xl hover:bg-gray-100 hover:bg-opacity-25">
                      <span>Categorias</span>
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
            <div className="relative">
              <button
                className="flex items-center justify-start gap-2 focus:outline-none"
                onClick={toggleMenu}
              >
                <span>Hola, Mario</span>
                <UIIcon icon="icon_account_circle" />
              </button>
              {isOpen && (
                <div className="absolute z-10 right-0 mt-2 w-48 bg-white text-gray-700 border rounded-md shadow-lg">
                  <ul className="rounded-lg shadow-md">
                    <li className="p-4 cursor-pointer text-sm flex justify-start items-center gap-2 hover:bg-gray-100">
                      <UIIcon icon="icon_manage_accounts" />
                      <span>Perfil</span>
                    </li>
                    <li
                      className="p-4 cursor-pointer text-sm flex justify-start items-center gap-2 hover:bg-gray-100"
                      onClick={logOut}
                    >
                      <UIIcon icon="icon_logout" />
                      <span>Cerrar Sesión</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default UINavbar;
