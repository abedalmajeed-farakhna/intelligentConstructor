import { ProjectStatusEnum } from "../../../enums/projectStatusEnum";

export interface IAlertDialogProps {
    title:string,
    message:string,
    showButtons?:boolean,
    onClick:()=>void,
    onHandleClose:()=>void
    
}