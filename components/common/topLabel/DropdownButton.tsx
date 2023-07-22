"use client";

import { dropdownIcon } from "@/public/assets/icon";
import { menuItems } from "@/public/data";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const DropdownButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="flex lg:hidden relative">
      <Image
        src={dropdownIcon}
        className="cursor-pointer"
        onClick={() => setOpen((prv) => !prv)}
        alt=""
      />
      {open && (
        <div className="absolute top-10 right-0 flex flex-col justify-center items-start gap-5 font-sans bg-surface border-2 border-surface-accent border-opacity-50  w-40 h-auto z-50 rounded-xl p-5 transition-all ease-in-out delay-[2s]">
          {menuItems.map(({ label, link }, i) => (
            <Link
              key={i}
              href={link}
              className="text-high-contrast text-center font-lato text-sm font-black"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </section>
  );
};
