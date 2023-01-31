import { ThemeOptions } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme: ThemeOptions) => ({
  root: {
    width: 170,
    padding: `0`,
    marginLeft: -19,
    "& .MuiTypography-body1": {
      padding: 2,
    },
  },
 
  icon: {},
  nameSection: {
    width: 110,
  },
  dateSection: {
    color: theme.colors.gray5,
    fontSize: theme.fontSize.small,
  },
}));

export default useStyle;
