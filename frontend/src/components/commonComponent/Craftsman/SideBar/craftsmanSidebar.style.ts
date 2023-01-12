import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme) => ({
  root: {
    width: 250,
  },
  drawer: {
    display: "block",

    "& .MuiDrawer-paper": {
      boxSizing: "border-box",
      width: 250,
      marginTop: 42,
    }
  }
}));

export default useStyle;