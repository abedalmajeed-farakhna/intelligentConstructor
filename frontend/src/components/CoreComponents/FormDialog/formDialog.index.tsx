import React from "react";
import { Dialog, DialogTitle } from "@mui/material";

import { IFormDialogProps } from "./formDialog.type";
import useStyles from "./formDialog.style";
import classNames from "classnames";

const FormDialog: React.FC<IFormDialogProps> = ({isOpen, title, children, onClose,customClassName}) => {
  const classes = useStyles();

  return (
      <Dialog open={isOpen} className={classNames(classes.rootasd,customClassName)}>
        <DialogTitle>
          {title} <span className={classes.close} onClick={onClose}> x</span>
        </DialogTitle>
        {children}
        
      </Dialog>
  );
};
export default FormDialog;