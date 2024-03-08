import UICard from "../../components/molecules/UICard";
import UIInput from "../../components/atoms/UIInput";
import { useContext } from "react";
import { AuthContext } from "../../context/AuhContext";
import { useNavigate } from "react-router-dom";

export function LoginPage() {
  const { setAuthState } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    setAuthState({ isAuthenticated: true, user: "mario" });
    localStorage.setItem("token", "123456");
    navigate("/app/home");
  };

  return (
    <>
      <div className="flex justify-center items-center h-[100vh] w-full">
        <UICard
          className="w-1/5"
          img={"/assets/logo/logo-one.webp"}
          title={"Inicia tu Sesión"}
          description={"Inicia sesión y drisfruta del mejor entretenimiento"}
        >
          <form className="flex flex-col justify-center items-center">
            <UIInput className="w-full" value={""} placeholder="Email" />
            <UIInput
              className="w-full"
              type="password"
              value={""}
              placeholder="Contraseña"
            />
            <button
              className="my-8 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-md focus:outline-none focus:shadow-outline"
              onClick={handleLogin}
            >
              Iniciar sesion
            </button>
          </form>
        </UICard>
      </div>
    </>
  );
}
