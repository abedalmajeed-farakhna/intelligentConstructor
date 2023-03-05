import React from "react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

import { Card, CardContent, Typography } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PermMediaIcon from "@mui/icons-material/PermMedia";

import { ProjectStatusEnum } from "../../../enums/projectStatusEnum";
import CustomRating from "../CustomRating/customRating.index";
import ProjectStatus from "../ProjectStatus/projectStatus.index";
import useStyles from "./basicCard.style";
import { PATH_NAMES } from "../../../constants/route";

import { IBasicCardProps } from "./basicCard.type";

const BasicCard: React.FC<IBasicCardProps> = ({
  title,
  name,
  status,
  expectedStart,
  expectedEnd,
  ratingValue,
  requestId,
}) => {
  const navigate = useNavigate();

  // console.log(expectedStart, "expectedStart");
  //console.log(expectedEnd, "expectedEnd");
  const classes = useStyles();
  const goToGalary = () => {
    navigate(`${PATH_NAMES.Gallery}/${requestId}`); //TODO save name in redux
  };
  return (
    <Card sx={{ Width: 50 }} className={classes.boxShadow}>
      <CardContent className={classes.rootw}>
        <Typography className={classes.headItem} variant="h5" component="div">
          {title}{" "}
          <CustomRating
            value={ratingValue}
            disabled={status != ProjectStatusEnum.Done}
            id={requestId}
          />
        </Typography>

        <div className={classes.dFlex}>
          <div className={classes.dFlexCol}>
          <Typography sx={{ mb: 1 }} color="text.secondary">
            <ProjectStatus projectStatus={status} />
          </Typography>
          <Typography sx={{ mb: 1 }} color="text.secondary">
          {name}
        </Typography>
          </div>
          <div onClick={goToGalary} className={classes.portfolio}>
            <p>Show My Portfolio</p>
            <PermMediaIcon />
          </div>
        </div>

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
