import { IAppDownloads, ILinkImg, ILinkLabel } from "@/interface";
import {
  appStoreSmall,
  fbOutline,
  instOutline,
  playStoreSmall,
  twOutline,
} from "../assets/icon";
import { appStore, googlePlay } from "../assets/images";

export const appDownloads: IAppDownloads[] = [
  {
    link: "/",
    smallIcon: appStoreSmall,
    icon: appStore,
  },
  {
    link: "/",
    smallIcon: playStoreSmall,
    icon: googlePlay,
  },
];

export const menuItems: ILinkLabel[] = [
  {
    link: "/",
    label: "Home",
  },
  {
    link: "/",
    label: "Reviews",
  },
  {
    link: "/",
    label: "About",
  },
  {
    link: "/",
    label: "Contact",
  },
];

export const socialMedia: ILinkImg[] = [
  {
    icon: fbOutline,
    link: "/",
  },
  {
    icon: instOutline,
    link: "/",
  },
  {
    icon: twOutline,
    link: "/",
  },
];
