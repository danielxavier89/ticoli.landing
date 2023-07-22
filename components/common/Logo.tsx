"use client";

import Image from "next/image";
import Link from "next/link";

import { ILogo } from "@/interface";
import { logo, logoWhite } from "@/public/assets";

export const Logo = ({ link = "/", variant = "black" }: ILogo) => (
  <Link href={link}>
    {variant === "black" ? (
      <Image src={logo} alt="ticoli" />
    ) : (
      <Image src={logoWhite} alt="ticoli" />
    )}
  </Link>
);
