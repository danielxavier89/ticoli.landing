"use client";

import Link from "next/link";
import { twMerge } from "tailwind-merge";

import { IAppDownload } from "@/interface";
import { appDownloads } from "@/public/data";
import Image from "next/image";

export const AppDownload = ({
  small,
  gap = "20px",
  className,
}: IAppDownload) => (
  <section
    className={twMerge(
      `flex justify-center items-center relative ${
        (gap === "12px" && "gap-3") || (gap === "20px" && "gap-5")
      }`,
      className
    )}
  >
    {appDownloads.map(({ icon, smallIcon, link }, i) => (
      <Link href={link} key={i} className="">
        {small ? (
          smallIcon
        ) : (
          <Image className="w-[123px] md:w-auto" src={icon} alt="" />
        )}
      </Link>
    ))}
  </section>
);
