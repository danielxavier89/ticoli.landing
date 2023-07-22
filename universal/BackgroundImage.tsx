"use client";

import Image from "next/image";
import { twMerge } from "tailwind-merge";

import { IBackgroundImage } from "@/interface";

export const BackgroundImage = ({
  children,
  img,
  mobImg,
  className,
  hidden,
  topLabel,
}: IBackgroundImage) => {
  const bgHidden =
    (hidden === "sm" && "md:inset-0") ||
    (hidden === "md" && "lg:inset-0") ||
    (hidden === "lg" && "xl:inset-0") ||
    (!hidden && "inset-0");

  return (
    <main className={twMerge(`relative w-full`, className)}>
      <div className={`absolute w-full ${topLabel && "z-10"} ${bgHidden}`}>
        {mobImg && (
          <Image
            src={mobImg}
            className="w-full md:hidden"
            alt="background image"
            fill
          />
        )}
        <Image
          src={img}
          className={`w-full ${mobImg && "hidden md:block"}`}
          alt="background image"
          fill
        />
      </div>

      <section className="relative z-10">{children}</section>
    </main>
  );
};
