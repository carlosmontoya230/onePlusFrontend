import { ReactNode } from "react";

function UITitle({ children, className = "", tagTitle = "h3" }: UITitleProps) {
  const tagElement = {
    h1: (
      <h1 className={`text-white text-3xl font-bold font-sans ${className}`}>
        {children}
      </h1>
    ),
    h2: (
      <h2 className={`text-white text-2xl font-bold font-sans ${className}`}>
        {children}
      </h2>
    ),
    h3: (
      <h3 className={`text-white text-lg font-semibold font-sans ${className}`}>
        {children}
      </h3>
    ),
  };

  return tagElement[tagTitle];
}

interface UITitleProps {
  children: ReactNode;
  className?: string;
  tagTitle?: "h1" | "h2" | "h3";
}

export default UITitle;
