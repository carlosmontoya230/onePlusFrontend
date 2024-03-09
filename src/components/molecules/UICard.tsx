import React, { Fragment, ReactNode } from "react";
import UITitle from "../atoms/UITitle";

const UICard: React.FC<CardProps> = ({
  children,
  className = "",
  img,
  title,
  description,
}: CardProps) => {
  return (
    <Fragment>
      <section className={`rounded-xl shadow-xl p-8 bg-white ${className}`}>
        <article className="text-center p-2">
          {img && (
            <div className="flex justify-center items-center">
              <img src={img} alt={`img-card-${img}`} width={250} />
            </div>
          )}
          <UITitle className="pt-6 pb-2 text-black" tagTitle="h2">
            {title}
          </UITitle>
          <p className="text-left py-2">{description}</p>
        </article>
        <article>{children}</article>
      </section>
    </Fragment>
  );
};

interface CardProps {
  children: ReactNode;
  img?: string;
  className?: string;
  title: string;
  description?: string;
}

export default UICard;
