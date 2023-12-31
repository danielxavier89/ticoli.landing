"use client";

import { IFriend } from "@/interface";
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

export const friendsData: IFriend[] = [
  {
    img: parson1,
    bgImage: parsonBg1,
    position: "left-0 -top-20 z-0",
    minWidth: "w-[252px]",
    minHeight: "h-[328px]",
    bgPosition: "top-[24px]",
  },
  {
    img: parson2,
    bgImage: parsonBg2,
    position: "left-20 top-24 z-10",
    minWidth: "w-[315px]",
    minHeight: "h-[414px]",
    bgPosition: "top-[61px]",
    playButton: true,
  },
  {
    img: parson3,
    bgImage: parsonBg3,
    position: "bottom-64 right-48 z-10",
    minWidth: "w-[365px]",
    minHeight: "h-[507px]",
    bgPosition: "top-[70px]",
    rattingCard: true,
  },
  {
    img: parson4,
    bgImage: parsonBg4,
    position: "right-0 -top-20 z-0",
    minWidth: "w-[315px]",
    minHeight: "h-[458px]",
    bgPosition: "top-[137px]",
  },
];
