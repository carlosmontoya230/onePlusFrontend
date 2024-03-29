import UICard from "../../components/molecules/UICard";
import { useContext } from "react";
import { AuthContext } from "../../context/AuhContext";
import { Link, useNavigate } from "react-router-dom";
import { FormProps } from "../../hooks/useForm";
import UIFormDynamic from "../../components/organisms/UIFormDinamic";
import useAuthServices from "../../services/authServices";

export default function LoginPage() {
  const formLogin: FormProps = {
    email: {
      type: "email",
      value: "",
      label: "Email",
      placeholder: "Escribe tu email...",
      isValid: false,
      touch: false,
      validators: [
        { validation: "email" },
        { validation: "length", min: 5, max: 15 },
      ],
    },
    password: {
      type: "password",
      value: "",
      label: "Contraseña",
      placeholder: "Escribe tu contraseña...",
      isValid: false,
      touch: false,
      validators: [{ validation: "length", min: 5, max: 15 }],
    },
  };
  const { login } = useAuthServices();
  const { setAuthState } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (dataForm: any) => {
    console.log("dataForm: ***", dataForm);
    const resp = await login(dataForm);
    console.log("resp: ***", resp);
    setAuthState({ isAuthenticated: true, user: resp.name });
    localStorage.setItem("user-name", resp.name);
    localStorage.setItem("token", resp.token);
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
          <UIFormDynamic
            form={formLogin}
            buttonText="Iniciar sesion"
            onSubmit={handleLogin}
          />
          <div className="text-center text-blue-600">
            <Link to={"/sign-up"}>
              <span>¿Aún no tienes cuenta?</span> <strong>Registrate</strong>
            </Link>
          </div>
        </UICard>
      </div>
    </>
  );
}
