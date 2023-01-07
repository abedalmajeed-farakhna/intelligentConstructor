import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme) => ({
  toolbar: {
    position: "sticky",
    top: "0",
    display: "flex",
    justifyContent: "space-between",
  },

  link: {
    color: "var(--link--color)",
    marginRight: "1em",
    textDecoration: "none",
  },
}));

export default useStyle;
