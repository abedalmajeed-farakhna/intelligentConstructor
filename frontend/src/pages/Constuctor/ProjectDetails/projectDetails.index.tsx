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

const ProjectDetails: React.FC<IProjectDetailsProps> = ({}) => {
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
      <div>
        <div>Project name : {data.projectName}</div>
       
        <div>Space : {data.space}</div>

        <div>Start date: {format(new Date(data.startDate), "yyyy-MM-dd")}</div>
        <div>project Status :{getProjectStatusDescription(projectStatus)}</div>
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