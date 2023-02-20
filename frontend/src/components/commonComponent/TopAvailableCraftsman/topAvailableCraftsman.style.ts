import { ThemeOptions } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme: ThemeOptions) => ({
  root: {
    padding: "1em",
    minWidth: 600,
  },
  imageContainer: {
    borderRadius: "50%",
    width: "40px",
    overflow: "hidden",
    height: "40px",
  },
  image: {
    maxWidth: "100%",
  },
  radioLabel: {
    background: theme.colors.gray3,
    border: `2px solid ${theme.colors.primary}`,
    cursor: "pointer",
  },
  radioButton: {
    visibility: "hidden",
  },
  checked: {
    backgroundColor: theme.colors.primary,
  },
  headerSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: "20px",
    marginTop: "-35px",
    "& button": {
      textTransform: "capitalize !important",
    },
  },
  suggestionOption: {
    color: "#0c5460",
    backgroundColor: "#d1ecf1",
    border: "1px solid #bee5eb",
    padding: "10px",
    borderRadius: "5px",
    textTransform: "capitalize",
    marginBottom: "10px",
    "& span": {
      marginRight: "5px",
    },
  },
  actionButton: {
    padding: "5px 8px !important",
    maxWidth: "fit-content",
    textTransform: "capitalize",
    fontSize: "13px !important",
    marginRight: "12px !important",
    background: "black",
  },
  noteLabel: {
    padding: "10px",
    borderRadius: "5px",
    textTransform: "capitalize",
    marginBottom: "10px",
    color: "#383d41",
    backgroundColor: "#e2e3e5",
    border: "1px solid #d6d8db",
  },
}));

export default useStyle;
