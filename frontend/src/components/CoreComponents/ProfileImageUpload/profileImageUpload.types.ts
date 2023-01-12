export interface IProfileImageUploadProps {
  type: string;

  defaultImage?: string;
  isMultiple?: boolean;

  onChange: (path) => void;
}