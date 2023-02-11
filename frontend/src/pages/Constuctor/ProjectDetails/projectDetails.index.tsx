import axios from "axios";
import React, { useEffect, useState } from "react";
import BasicCard from "../../../components/CoreComponents/BasicCard/basicCard.index";
import { IDataProps, IProjectDetailsProps } from "./projectDetails.type";
import Loading from "../../../components/CoreComponents/Loading/loading.index";
import {
  getProjectStatusDescription,
  getSectorEnumDescriptions,
} from "../../../utils/enumDescriptions";
import { Grid } from "@mui/material";
import { format } from "date-fns";
import { getProjectStatus } from "../../../utils/projectUtils";
import BreadCrump from "../../../components/CoreComponents/BreadCrump/breadCrump.index";
import { PATH_NAMES } from "../../../constants/route";
import useStyles from "./projectDetails.style";
import ProjectStatus from "../../../components/CoreComponents/ProjectStatus/projectStatus.index";


const ProjectDetails: React.FC<IProjectDetailsProps> = ({}) => {
  const classes = useStyles();
  const [data, setData] = useState<IDataProps>();

  const location = window.location;
  const locationQiery = location?.href.split("/");
  const [rowsData, setRows] = useState([]);

  const id = locationQiery[locationQiery.length - 1];

  useEffect(() => {
    axios
      .get(`/Constructor/GetProjectDetailsById?ProjectId=${id}`)
      .then((result) => {
        setData(result.data);
        console.log(result.data, "test");
      });
  }, []);

 
  if (!data) return <Loading />;

  console.log(data?.craftsmans, "data?.craftsmans");
  var allRequestStatus = data?.craftsmans.map((t) => {
    return t.projectStatus;
  });

  var projectStatus = getProjectStatus(allRequestStatus);
  return (
    <div>
        <div>
        <BreadCrump current={"Project Details"} linkList={[{name:"ProjectList",link:PATH_NAMES.PROJECT_LIST}]}/>
           
        </div>
    <div>
      <div className={classes.projectDetailss}>
        <div className={classes.projectDetailsItem}>Project name : <span>{data.projectName}</span></div>
       
        <div className={classes.projectDetailsItem}>Space : <span>{data.space}</span></div>

        <div className={classes.projectDetailsItem}>Start date: <span>{format(new Date(data.startDate), "yyyy-MM-dd")}</span></div>
        <div className={classes.projectDetailsItem}>project Status: <span>  <ProjectStatus projectStatus={projectStatus} className ={classes.projectStatus} /></span></div>
      </div>

      <Grid container spacing={2}>
        {data?.craftsmans?.map((element) => (
          <Grid item xs={6}>
            <BasicCard
              ratingValue={element.ratingValue}
              title={getSectorEnumDescriptions(element.sector)}
              name={element.fullName}
              status={element.projectStatus}
              expectedStart={element.expectedStartDate}
              expectedEnd={element.expectedEndDate}
            />
          </Grid>
        ))}
      </Grid>
    </div>
    </div>
  );
};
export default ProjectDetails;