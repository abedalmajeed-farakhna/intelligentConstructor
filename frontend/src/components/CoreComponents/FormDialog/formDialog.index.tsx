import React from "react";
import { Dialog, DialogTitle } from "@mui/material";

import { IFormDialogProps } from "./formDialog.type";
import useStyles from "./formDialog.style";

const FormDialog: React.FC<IFormDialogProps> = ({isOpen, title, children, onClose}) => {
  const classes = useStyles();

  return (
    <div>
      <Dialog open={isOpen}>
        <DialogTitle>
          {title} <span onClick={onClose}> x</span>
        </DialogTitle>
        {children}
      </Dialog>
    </div>
  );
};
export default FormDialog;