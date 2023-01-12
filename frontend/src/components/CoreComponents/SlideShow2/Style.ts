import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme) => ({
  box: {
    height: "100vh",
    width: "100%",
    background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(./../images/modern-architecture.jpg) `,
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "1em",
  },
  leftBox: {
    flex: "1",
    color: "#fff",
  },
  rightBox: {
    flex: "1",
  },
  innerRightBox: {
    border: "1px solid #fff",
    padding: "2em",
    borderRadius: "10px",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "1em",
  },
  link: {
    textDecoration: "none",
    color: "#fff",
    margin: "1em",
    border: "1px solid #fff",
    padding: "0.5em",
    borderRadius: "10px",
    "&:hover": {
      background: "#000",
      color: "#fff",
    },
    transition: "0.5s",
  },
}));

export default useStyle;
