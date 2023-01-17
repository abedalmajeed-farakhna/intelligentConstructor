export interface IDateInputProps {
    defaultValue:string,
    label:string,
    name:string,
    min?:string,
    max?:string,
    onChange? :(val:any)=>void

}