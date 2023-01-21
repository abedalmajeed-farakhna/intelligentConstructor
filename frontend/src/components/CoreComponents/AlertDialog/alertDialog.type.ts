import { ProjectStatusEnum } from "../../../enums/projectStatusEnum";

export interface IAlertDialogProps {
    title:string,
    message:string,
    onClick:()=>void,
    onHandleClose:()=>void
    
}