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
import { IBasicCardProps } from "./basicCard.type";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);
const BasicCard: React.FC<IBasicCardProps> = ({
  title,
  name,
  status,
  expectedStart,
  expectedEnd,
  ratingValue,
}) => {
  console.log(expectedStart, "expectedStart");
  console.log(expectedEnd, "expectedEnd");
  return (
    <Card sx={{ Width: 50 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}{" "}
          <CustomRating
            value={ratingValue}
            disabled={status != ProjectStatusEnum.Done}
          />
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {getProjectStatusDescription(status)}
        </Typography>
        <Typography variant="body2">
          {format(new Date(expectedStart), "yyyy-MM-dd")} -{" "}
          {format(new Date(expectedEnd), "yyyy-MM-dd")}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default BasicCard;
