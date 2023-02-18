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
  navbar:{
    boxShadow: `0 5px 20px -5px rgb(0 0 0 / 7%) !important`,
   backgroundColor:"white !important"
  },
  homeIcon:{
    color:'black'
  }
}));

export default useStyle;
