import React from "react";

const UIFooter: React.FC = () => {
  return (
    <footer className="w-full min-h-60 flex justify-center items-center !bg-transparent">
      <div className="h-full">
        <p className="text-center text-base text-white font-bold">
          &copy; 2024 One. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default UIFooter;
