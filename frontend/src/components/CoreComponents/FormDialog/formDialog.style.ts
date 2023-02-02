import { ThemeOptions } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme: ThemeOptions) => ({
  rootasd: {
    '& .MuiPaper-root':{
          minWidth: 450,
    }

  },
}));

export default useStyle;
