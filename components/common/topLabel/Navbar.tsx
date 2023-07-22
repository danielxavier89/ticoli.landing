"use client";

import Link from "next/link";

import { menuItems } from "@/public/data";
import { Container, MainContainer } from "@/universal";
import { AppDownload, Logo } from "..";
import { DropdownButton } from "./DropdownButton";

export const Navbar = () => (
  <MainContainer bgColor="surface-accent">
    <Container>
      <nav className="flex justify-between items-center py-[18px]">
        <Logo />
        <DropdownButton />

        <section className="hidden lg:flex justify-end items-center gap-8 ">
          <div className="flex justify-center items-center gap-8 font-sans">
            {menuItems.map(({ label, link }, i) => (
              <Link
                key={i}
                href={link}
                className="text-surface text-center font-lato text-sm font-black"
              >
                {label}
              </Link>
            ))}
          </div>

          <AppDownload small gap="12px" />
        </section>
      </nav>
    </Container>
  </MainContainer>
);
