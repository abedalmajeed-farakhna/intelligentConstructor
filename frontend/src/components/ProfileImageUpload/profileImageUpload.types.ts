export interface IProfileImageUploadProps {
  text: string;
  type: string;
  
  defaultImage?: string;
  isMultiple?: boolean;

  onChange: (path) => void;
}
