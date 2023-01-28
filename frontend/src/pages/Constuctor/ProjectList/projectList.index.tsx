import { GridColDef } from "@mui/x-data-grid";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CustomDataGrid from "../../../components/CoreComponents/CustomDataGrid/customDataGrid.index";
import CustomLink from "../../../components/CoreComponents/CustomLink/customLink.index";
import { IProjectListProps } from "./projectList.type";

const ProjectList: React.FC<IProjectListProps> = ({}) => {
  const [data, setData] = useState([]);
  const columns: GridColDef[] = [
    {
      field: "projectName",
      headerName: "User name",
      description: "Username ",
      sortable: false,
      width: 160
    },

    {
      field: "fullName",
      headerName: "full name",
      width: 150,
    },
    {
      field: "speed",
      headerName: "speed",
      width: 150,
    },
  ];
  useEffect(() => {
    axios.get(`/Constructor/GetProjectList`).then((result) => {
      setData(result.data);
      console.log(result.data);
    });
  }, []);
  console.log(data, "rowsData");
  return (
    <div>
      <CustomDataGrid rows={data} columns={columns} />
    </div>
  );
};
export default ProjectList;