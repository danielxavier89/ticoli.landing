// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import {
  parson1,
  parson2,
  parson3,
  parson4,
  parsonBg1,
  parsonBg2,
  parsonBg3,
  parsonBg4,
} from "@/public/assets/images";
import { Autoplay, FreeMode } from "swiper/modules";
import { FriendsCard } from "./FriendsCard";

export const Slider = () => (
  <Swiper
    slidesPerView={1}
    spaceBetween={30}
    loop={true}
    freeMode={true}
    autoplay={{
      delay: 3000,
      disableOnInteraction: true,
    }}
    modules={[FreeMode, Autoplay]}
    className="mySwiper min-h-[700px]"
  >
    <SwiperSlide className="relative w-[252px]  flex justify-center items-center">
      <FriendsCard
        bgImage={parsonBg1}
        bgPosition="top-[24px]"
        img={parson1}
        minHeight="h-[328px]"
        minWidth="w-[252px]"
        className="relative mx-auto"
        rattingCard
      />
    </SwiperSlide>
    <SwiperSlide className="relative w-[252px]  flex justify-center items-center">
      {/* <Image src={parsonWithBg2} className="mx-auto" alt="" /> */}

      <FriendsCard
        bgImage={parsonBg2}
        bgPosition="top-[61px]"
        img={parson2}
        minWidth="w-[315px]"
        minHeight="h-[414px]"
        className="relative mx-auto"
        rattingCard
      />
    </SwiperSlide>
    <SwiperSlide className="relative w-[252px] flex justify-center items-center">
      {/* <Image src={parsonWithBg3} className="mx-auto" alt="" /> */}

      <FriendsCard
        bgImage={parsonBg3}
        bgPosition="top-[70px]"
        img={parson3}
        minWidth="w-[365px]"
        minHeight="h-[507px]"
        className="relative mx-auto"
        rattingCard
      />
    </SwiperSlide>
    <SwiperSlide className="relative w-[252px] flex justify-center items-center">
      <FriendsCard
        bgImage={parsonBg4}
        bgPosition="top-[137px]"
        img={parson4}
        minWidth="w-[315px]"
        minHeight="h-[458px]"
        className="relative mx-auto"
        rattingCard
      />
    </SwiperSlide>
  </Swiper>
);
