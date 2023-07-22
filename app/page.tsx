"use client";

import {
  AnimatedCards,
  Hero,
  OurFriends,
  SubHero,
  Tailored,
} from "@/components";

const Home = () => (
  <main className="overflow-x-hidden">
    <Hero />
    <SubHero />
    <Tailored />
    <AnimatedCards />
    <OurFriends />
  </main>
);

export default Home;
