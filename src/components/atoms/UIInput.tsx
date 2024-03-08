import { Fragment } from "react";

function UIInput({
  className = "",
  type = "text",
  value = "",
  placeholder = "Escribe aquí...",
}: InputProps) {
  return (
    <Fragment>
      <div className={`p-2 ${className}`}>
        <input
          type={type}
          value={value}
          className="w-full bg-gray-200 rounded-lg py-2 px-4 focus:outline-none focus:bg-white border-2 border-gray-300 focus:border-blue-500 placeholder-gray-500"
          placeholder={placeholder}
        />
      </div>
    </Fragment>
  );
}

interface InputProps {
  className?: string;
  type?: "text" | "number" | "password" | "email";
  value?: string | number;
  placeholder?: string;
}

export default UIInput;
