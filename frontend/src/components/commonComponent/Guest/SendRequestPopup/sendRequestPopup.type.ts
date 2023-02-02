export interface ISendRequestPopup {
  isOpen: boolean;
  onClose: (showAlertPopup?:boolean) => void;
  userId:string
}