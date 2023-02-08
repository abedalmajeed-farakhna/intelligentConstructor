export interface IFormDialogProps {
  isOpen: boolean;
  title: string;
  children: React.ReactChild;
  onClose: () => void;
  customClassName?:any;
}