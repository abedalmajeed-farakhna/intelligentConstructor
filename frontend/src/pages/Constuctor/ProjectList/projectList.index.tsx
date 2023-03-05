import { GridColDef } from "@mui/x-data-grid";
import axios from "axios";
import React, { useEffect, useState } from "react";
import BasicTimeline from "../../../components/CoreComponents/BasicTimeline/basicTimeline.index";
import CustomDataGrid from "../../../components/CoreComponents/CustomDataGrid/customDataGrid.index";
import CustomLink from "../../../components/CoreComponents/CustomLink/customLink.index";
import { PATH_NAMES } from "../../../constants/route";
import { IProjectListProps } from "./projectList.type";
import useStyles from "./projectList.style";
import BreadCrump from "../../../components/CoreComponents/BreadCrump/breadCrump.index";
import CustomButton from "../../../components/CoreComponents/CustomButton/customButton.index";
import { useNavigate } from "react-router-dom";
import ViewIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/ModeEdit';
import { getProjectStatus } from "../../../utils/projectUtils";
import { ProjectStatusEnum } from "../../../enums/projectStatusEnum";


const ProjectList: React.FC<IProjectListProps> = ({}) => {
  const [data, setData] = useState([]);
  const classes = useStyles();


  const navigate = useNavigate();

  const showProjectDetails=(id)=>{
    navigate(`${PATH_NAMES.PROJECT_DETAILSLink}/${id}`); 
  }

  const editProjectDetails=(id)=>{
    navigate(`${PATH_NAMES.AddProjectCraftsman}/${id}`); 
  }
  const columns: GridColDef[] = [
    {
      field: "projectName",
      headerName: "Project name",
      description: "Project Name ",
      sortable: false,
      width: 160
    },

    {
      field: "Status",
      headerName: "Status",
      width: 130,
      renderCell: (params) => (
        <BasicTimeline data={params.row.projectDetails}/>
      ),
    },
    {
      field: "electricianFullName",
      headerName: "Electrician",
      width: 120,
      renderCell: (params) => (
        <div> {params.row.electricianFullName??"-"}</div>
      ),
    },
    {
      field: "plumberFullName",
      headerName: "Plumber",
      width: 120,
      renderCell: (params) => (
        <div> {params.row.plumberFullName??"-"}</div>
      ),
    },
    {
      field: "builderFullName",
      headerName: "Builder",
      width: 120,
      renderCell: (params) => (
        <div> {params.row.builderFullName??"-"}</div>
      ),
    },
    {
      field: "tilerFullName",
      headerName: "Tiler",
      width: 120,
      renderCell: (params) => (
        <div> {params.row.tilerFullName??"-"}</div>
      ),
    },
  
    {
      field: "housPainterFullName",
      headerName: "hous painter",
      width: 120,
      renderCell: (params) => (
        <div>{params.row.housPainterFullName??"-"}</div>
      ),
    },
    {
      field: "carpenterFullName",
      headerName: "carpenter",
      width: 120,
      renderCell: (params) => (
        <div> {params.row.carpenterFullName??"-"}</div>
      ),
    },
   
    {
      field: "action",
      headerName: "Actions",
      filterable: false,
      sortable: false,
      width: 150,
      renderCell: (params) => (
        <>
        <div className={classes.tableICon}  onClick={()=>showProjectDetails(params.row.id)}>
        <ViewIcon className={classes.viewICon} /> view
      </div>
       { getProjectStatus(params.row.projectDetails.map((t) => {
    return t.requestStatus;
  })) != ProjectStatusEnum.Done && <div className={classes.tableICon} onClick={()=>editProjectDetails(params.row.id)}>
      <EditIcon className={classes.editIcon}  /> edit 
     </div>}
     </>
      ),
    },
  ];
  useEffect(() => {
    axios.get(`/Constructor/GetProjectList`).then((result) => {
      setData(result.data);
      console.log(result.data);
    });
  }, []);

  const goToProjectList=()=>{
    navigate(PATH_NAMES.PROJECT);
  }

  return (
    <div>
      <div>
        <BreadCrump current={"Project List"} linkList={[]} />
      </div>

      <div>
        <div className={classes.fullWidth}>
        <CustomButton className={classes.addProjectBtn} onClick={goToProjectList} text={"add new project"} />
        </div>
        
        <div>
          <CustomDataGrid rows={data} columns={columns} />
        </div>
      </div>
    </div>
  );
};
export default ProjectList;