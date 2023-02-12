import { IImageGalleryListProps } from "../../../../types/types";

export interface IImageGalleryProps {
  list?:IImageGalleryListProps[],
  requestId?:number,
  userId?:string,
  reloadData?:boolean,
  isEditable?:boolean
}
export interface IDataProps {
  imageName: string;
  title: string;
  id:number
}