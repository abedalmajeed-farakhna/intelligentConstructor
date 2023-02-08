export interface IImageGalleryModalProps {
  onHide: any;
  requestId?: number;
}

export interface IDataProps {
  title: string;
  imageList: IImageProps[];
}
interface IImageProps {
  imageName: string;
}
