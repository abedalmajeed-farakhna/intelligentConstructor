export interface IImageUploadProps {
    text:string,
    type:string,
    defaultImage?:string,
    
    isMultiple?:boolean
    
    onChange:(path)=>void
  }
  