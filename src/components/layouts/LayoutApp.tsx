import React, { ReactNode } from "react";
import UIFooter from "../organisms/UIFooter";
import UINavbar from "../organisms/UINavbar";

interface LayoutAppProps {
  children: ReactNode;
}

const LayoutApp: React.FC<LayoutAppProps> = ({ children }) => {
  return (
    <main>
      <UINavbar />
      <section className="min-h-[70vh]">{children}</section>
      <UIFooter />
    </main>
  );
};

export default LayoutApp;
