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
        <div>Project name : {data.projectName}</div>

        <div>Space : {data.space}</div>

        <div>Start date: {format(new Date(data.startDate), "yyyy-MM-dd")}</div>
        <div>
          project Status :{getProjectStatusDescription(projectStatus)}
        </div>
      </div>

      <Grid container spacing={2}>
        {data?.craftsmans?.map((element) => (
          <Grid item xs={6}>
            <BasicCard
              title={getSectorEnumDescriptions(element.sector)}
              name={element.fullName}
              status={getProjectStatusDescription(element.projectStatus)}
              expectedStart={element.expectedStartDate}
              expectedEnd={element.expectedEndDate}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
export default ProjectDetails;