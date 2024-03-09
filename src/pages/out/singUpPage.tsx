import UICard from "../../components/molecules/UICard";
import { Link, useNavigate } from "react-router-dom";
import { FormProps } from "../../hooks/useForm";
import UIFormDynamic from "../../components/organisms/UIFormDinamic";
import useAuthServices from "../../services/authServices";

export default function SignUpPage() {
  const formLogin: FormProps = {
    name: {
      type: "text",
      value: "",
      label: "Nombre",
      placeholder: "Escribe tu nombre...",
      isValid: false,
      touch: false,
    },
    document_number: {
      type: "number",
      value: "",
      label: "Documento de identidad",
      placeholder: "Escribe tu documento...",
      isValid: false,
      touch: false,
      validators: [{ validation: "number" }],
    },
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
  const { signUp } = useAuthServices();
  const navigate = useNavigate();

  const handleSignUp = async (dataForm: any) => {
    console.log("dataForm: ***", dataForm);
    const resp = await signUp(dataForm);
    console.log("resp: ***", resp);
    navigate("/login");
  };

  return (
    <>
      <div className="flex justify-center items-center h-[100vh] w-full">
        <UICard
          className="w-1/5"
          img={"/assets/logo/logo-one.webp"}
          title={"Registrate"}
          description={"Registrate y drisfruta del mejor entretenimiento"}
        >
          <UIFormDynamic
            form={formLogin}
            buttonText="Registrarse"
            onSubmit={handleSignUp}
          />
          <div className="text-center text-blue-600">
            <Link to={"/login"}>
              <span>¿Ya tienes cuenta?</span> <strong>Inicia sesión</strong>
            </Link>
          </div>
        </UICard>
      </div>
    </>
  );
}
