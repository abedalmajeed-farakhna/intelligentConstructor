import { makeStyles } from "@mui/styles";
import { ThemeOptions } from "@mui/material";

const useStyle = makeStyles((theme: ThemeOptions) => ({
  root: {
    padding: "1em",
    minWidth: 600,
  },
  formRoot: {},
  blockCenter: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  formField: {
    marginBottom: 15,
    "& button": {
      background: `${theme.colors.gray2} !important`,
      color: `${theme.colors.primary} !important`,
    },
  },
  customForm: {
    "& label": {
      color: "black",
      textTransform: "capitalize",
      fontSize: 14,
    },
    "& div": {
      maxWidth: "100% !important",
      width: "100% !important",
    },
    "& select": {
      maxWidth: "100% !important",
      width: "100% !important",
    },
    "& input": {
      maxWidth: "calc(100% - 30px ) !important",
      width: "calc(100% - 30px ) !important",
    },
    "& button": {
      width: "100% !important",
    },
  },
  saveBtn: {
    background: `${theme.colors.primary} !important`,
  },
  addNewProject: {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: "30px",
    textTransform:'capitalize',
    '& button':{
      textTransform:'capitalize !important'
    }
  },
}));

export default useStyle;
