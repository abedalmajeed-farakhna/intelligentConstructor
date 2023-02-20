import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { format } from "date-fns";
import React from "react";
import { ProjectStatusEnum } from "../../../enums/projectStatusEnum";
import { getProjectStatusDescription } from "../../../utils/enumDescriptions";
import CustomRating from "../CustomRating/customRating.index";
import ProjectStatus from "../ProjectStatus/projectStatus.index";
import { IBasicCardProps } from "./basicCard.type";
import useStyles from "./basicCard.style";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const BasicCard: React.FC<IBasicCardProps> = ({
  title,
  name,
  status,
  expectedStart,
  expectedEnd,
  ratingValue,
  requestId
}) => {
  console.log(expectedStart, "expectedStart");
  console.log(expectedEnd, "expectedEnd");
  const classes = useStyles();

  return (
    <Card sx={{ Width: 50 }} className={classes.boxShadow}>
      <CardContent className={classes.rootw}>
        <Typography className={classes.headItem} variant="h5" component="div">
          {title}{" "}
          <CustomRating
            value={ratingValue}
            disabled={status != ProjectStatusEnum.Done}
             id ={requestId}
          />
        </Typography>
        <Typography sx={{ mb: 1}} color="text.secondary">
          {name}
        </Typography>
        <Typography sx={{ mb: 1 }} color="text.secondary">
          <ProjectStatus projectStatus={status} />

        </Typography>
        <Typography variant="body2" className={classes.dateIem}>
          <CalendarMonthIcon />
          {format(new Date(expectedStart), "yyyy-MM-dd")} -{" "}
          {format(new Date(expectedEnd), "yyyy-MM-dd")}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default BasicCard;
