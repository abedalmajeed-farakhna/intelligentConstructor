import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme) => ({
  root: {
    position: "relative",
    '& label': {
      position: 'absolute !important',
    }
  },
  imageContainer: {
    width: 170,
    height: 170,
    borderRadius: "50%",
    overflow: "hidden",
    border: "2px solid #fff",
    backgroundSize: "cover",
    marginBottom:'20px',
  },
  image: {
    width: 170,
    height: 170,
  },
  cameraIcones: {
    position: 'absolute',
    zIndex: "3",
    left: "20px",
    bottom: "10px",
    borderRadius: "50%",
    backgroundColor: "#e4e6eb !important",
    padding: "6px",
    fontSize: "30px !important",
    color: "black !important",
  },
}));

export default useStyle;