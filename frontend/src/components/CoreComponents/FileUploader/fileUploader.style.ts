import { makeStyles } from "@mui/styles";

    const useStyle = makeStyles((theme) => ({
      root: {
        color: "red",
        fontSize: 12,
        width: "100%",
        textAlign: "left",
       
      }
      , 
      rsgPreview60: {
        padding: 16,
        border: `1px solid  rgb(232, 232, 232)`,
        borderRadius: 3,
        width: "100%",
        display: "inlineBlock",
    }
    ,
    dropzone: {
        flex: 1,
        display:" flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        borderWidth: "2px",
        borderRadius: "2px",
        borderColor: "#eeeeee",
        borderStyle: "dashed",
        backgroundColor: "#fafafa",
        color: "#bdbdbd",
        outline: "none",
        transition: "border .24s easeInOut",
        cursor: "pointer",
           
    }
    }));
    
    
export default useStyle;