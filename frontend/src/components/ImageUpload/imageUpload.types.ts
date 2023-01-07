export interface IImageUploadProps {
    text:string,
    type:string,
    
    isMultiple?:boolean
    
    onChange:(path)=>void
  }
  