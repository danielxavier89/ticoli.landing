"use client";

import {
  heroBg,
  heroRightImg,
  mobHeroBg,
  mobHeroImg,
} from "@/public/assets/images";
import {
  BackgroundImage,
  CommonText,
  Container,
  MainContainer,
  Title,
} from "@/universal";
import { AbsoluteImg, InputGroup } from "../common";

export const Hero = () => (
  <BackgroundImage
    img={heroBg}
    mobImg={mobHeroBg}
    topLabel
    className="bg-[#EDEDE6]"
  >
    <MainContainer>
      <AbsoluteImg
        img={heroRightImg}
        className="-top-2.5 -right-[8.5%] w-[61.5%] hidden md:block"
      />

      <Container className="relative">
        <section className="max-w-xs lg:max-w-[660px] pt-10 pb-96 md:pb-32 lg:pb-52 w-full z-20 mx-auto md:mx-0">
          <Title variant="H1" color="surface" className="text-start">
            Join other parents to create
            <span className="text-outline"> better content</span> <br /> for our
            kids
          </Title>

          <CommonText className="mt-2 mb-10 max-w-[543px] text-start">
            We develop reading interest talking about nature, teaching social
            skills, music, cooking, sports and much more.
          </CommonText>

          <InputGroup />

          <div className="relative w-full hero-img pt-44 block md:hidden ">
            <AbsoluteImg
              img={mobHeroImg}
              className="pt-10 top-2.5 -bottom-20 -right-[30%] w-[128%]"
            />
          </div>
        </section>
      </Container>
    </MainContainer>
  </BackgroundImage>
);
