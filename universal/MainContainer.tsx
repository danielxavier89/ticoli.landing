"use client";
import { twMerge } from "tailwind-merge";

import { IMainContainer } from "@/interface";

export const MainContainer = ({
  children,
  className,
  bgColor = "transparent",
}: IMainContainer) => {
  const background =
    (bgColor === "surface" && "bg-surface") ||
    (bgColor === "surface-accent" && "bg-surface-accent") ||
    (bgColor === "surface-accent-sunken" && "bg-surface-accent-sunken") ||
    (bgColor === "surface-sunken" && "bg-surface-sunken");
  bgColor === "transparent" && "bg-transparent";

  return (
    <main className={`w-full ${background}`}>
      <section
        className={twMerge(`w-full max-w-[1280px] mx-auto relative`, className)}
      >
        {children}
      </section>
    </main>
  );
};
