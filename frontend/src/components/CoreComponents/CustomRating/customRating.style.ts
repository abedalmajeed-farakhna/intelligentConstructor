import { ThemeOptions } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';

export const StyledRating = styled(Rating)(({ theme }) => ({
  '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
    color: theme.palette.action.disabled,
  },
}));

const useStyle = makeStyles((theme: ThemeOptions) => ({
  root: {

  }
}));

export default useStyle;
