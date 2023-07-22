"use client";

import { joinCommunityBgImg, sheep1 } from "@/public/assets/images";
import { tailors } from "@/public/data";
import { BgContainer, Container, MainContainer } from "@/universal";
import {
  AbsoluteImg,
  AppDownload,
  JoinCommunity,
  SectionHeader,
} from "../common";
import { TailoredCard } from "./TailoredCard";

export const Tailored = () => (
  <MainContainer className="">
    <AbsoluteImg
      img={sheep1}
      className="bottom-[40%] md:-bottom-[27%] -left-[105%] lg:-left-[27%]"
    />
    <Container className="relative">
      <SectionHeader
        className="pt-[100px]"
        label="TAILORED BY YOU"
        title="Decide what they are going to read about"
        titleMaxWidth="max-w-[649px]"
        text="The must-haves real-life skills that we wished had the chance to learn as children"
        textMaxWidth="max-w-[536px]"
      />

      <main className="w-full mt-[75px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-12 gap-y-14">
        {tailors.map(({ img, title, des }, i) => (
          <TailoredCard key={i} img={img} title={title} des={des} />
        ))}
      </main>

      <AppDownload className="mt-[138px]" />
    </Container>

    <BgContainer img={joinCommunityBgImg}>
      <JoinCommunity className="p-8" />
    </BgContainer>
  </MainContainer>
);
