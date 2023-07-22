import { parsonMob1, parsonMob3, parsonMob4 } from "@/public/assets/images";
import Image from "next/image";
import { useEffect, useState } from "react";
import { RattingCard } from "./RattingCard";

const slides = [
  {
    url: parsonMob1,
    title: "Rene Braun 1",
    des: `It's engaging, fun, and motivates them to read more. Their enthusiasm for reading has grown, and so has their vocabulary and comprehension. As a dad, I couldn't be happier. Highly recommended!`,
    ratting: 3,
  },
  // {
  //   url: parsonMob2,
  //   title: "Rene Braun 2",
  //   des: `It's engaging, fun, and motivates them to read more. Their enthusiasm for reading has grown, and so has their vocabulary and comprehension. As a dad, I couldn't be happier. Highly recommended!`,
  //   ratting: 3,
  // },
  {
    url: parsonMob3,
    title: "Rene Braun 2",
    des: `It's engaging, fun, and motivates them to read more. Their enthusiasm for reading has grown, and so has their vocabulary and comprehension. As a dad, I couldn't be happier. Highly recommended!`,
    ratting: 5,
  },
  {
    url: parsonMob4,
    title: "Rene Braun 3",
    des: `It's engaging, fun, and motivates them to read more. Their enthusiasm for reading has grown, and so has their vocabulary and comprehension. As a dad, I couldn't be happier. Highly recommended!`,
    ratting: 4,
  },
];

export const FriendSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(0);

  useEffect(() => {
    setPreviousIndex(currentIndex > 0 ? currentIndex - 1 : slides.length - 1);
    setNextIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);

    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className="relative flex justify-center items-center flex-col">
      <div className="flex justify-center items-center gap-7 w-full overflow-x-hidden">
        <Image
          className="min-w-[256px] opacity-50"
          src={slides[previousIndex].url}
          alt="gallery image"
        />
        <Image
          className="min-w-[256px]"
          src={slides[currentIndex].url}
          alt="gallery image"
        />
        <Image
          className="min-w-[256px]  opacity-50"
          src={slides[nextIndex].url}
          alt="gallery image"
        />
      </div>

      <RattingCard
        des={slides[currentIndex].des}
        ratting={slides[currentIndex].ratting}
        title={slides[currentIndex].title}
        className="-mt-20 relative mx-auto"
        mob
        currentIndex={currentIndex}
        length={slides.length}
      />
    </div>
  );
};
