import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface IChildren {
  children: ReactNode;
}

export interface IClassName {
  className?: string;
}

export interface IChildrenWithClassName extends IChildren, IClassName {}

export type IColor =
  | "surface"
  | "surface-sunken"
  | "surface-accent"
  | "surface-accent-sunken"
  | "high-contrast"
  | "low-contrast"
  | "subtle-contrast"
  | "transparent";

export type IFontWeight = "400" | "500" | "600" | "700" | "800" | "900";

export type IFontFamily = "sora" | "source-sans" | "lato";

export interface IText extends IChildrenWithClassName {
  fontWeight?: IFontWeight;
  fontFamily?: IFontFamily;
}

export interface IMainContainer extends IChildrenWithClassName {
  bgColor?: IColor;
}

export interface ILogo extends IClassName {
  link?: string;
  variant?: "black" | "white";
}

export interface ILinkIcon {
  link: string;
  icon: StaticImageData;
}

export interface ILinkImg {
  link: string;
  icon: StaticImageData;
}

export interface ILinkLabel {
  link: string;
  label: string;
}

export interface IBackgroundImage extends IChildrenWithClassName {
  img: StaticImageData;
  mobImg?: StaticImageData;
  hidden?: "sm" | "md" | "lg";
  topLabel?: boolean;
}

export interface IAppDownload extends IClassName {
  small?: boolean;
  gap?: "12px" | "20px";
}

export interface IFormikError extends IClassName {
  name: string;
  component?: string;
}

export interface IAbsoluteImg extends IClassName {
  img: StaticImageData;
  alt?: string;
  width?: string;
  zIndex?: string;
}

export interface ISectionHeader extends IClassName {
  label: string;
  title: string;
  text?: string;
  btn?: JSX.Element;
  titleMaxWidth: string;
  textMaxWidth?: string;
}

export interface IFriend extends IClassName {
  minWidth: string;
  minHeight: string;
  position?: string;
  bgImage: StaticImageData;
  img: StaticImageData;
  bgPosition: string;
  playButton?: boolean;
  rattingCard?: boolean;
}

export interface IRattingCard extends IClassName {
  title: string;
  des: string;
  ratting: number;
  mob?: boolean;
  length?: number;
  currentIndex?: number;
}
