import { IClassName, ILinkIcon } from "./common";

export interface IAppDownloads extends ILinkIcon {
  smallIcon: JSX.Element;
}

export interface ITailored extends IClassName {
  img: StaticImageData;
  title: string;
  des: string;
}
