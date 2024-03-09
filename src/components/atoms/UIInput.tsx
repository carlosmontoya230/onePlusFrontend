import { Fragment } from "react";

function UIInput({
  className = "",
  type = "text",
  value = "",
  placeholder = "Escribe aquí...",
  isValid = true,
  errors = null,
  onChange,
}: InputProps) {
  const handleChange = (e: any) => {
    onChange(e.target.value);
  };

  return (
    <Fragment>
      <div className={`p-2 ${className}`}>
        <input
          type={type}
          value={value}
          className="w-full bg-gray-200 rounded-lg py-2 px-4 focus:outline-none focus:bg-white border-2 border-gray-300 focus:border-blue-500 placeholder-gray-500"
          placeholder={placeholder}
          onChange={handleChange}
        />
        {!isValid &&
          errors &&
          Object.entries(errors).map(([key, error]) => (
            <span key={key} className="text-sm text-red-700">
              {error}
            </span>
          ))}
      </div>
    </Fragment>
  );
}

interface InputProps {
  className?: string;
  type?: "text" | "number" | "password" | "email";
  value?: any;
  placeholder?: string;
  isValid?: boolean;
  errors?: object | null;
  onChange: (e: any) => void;
}

export default UIInput;
