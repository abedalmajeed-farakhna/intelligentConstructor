import React from "react";
import { ProjectStatusEnum } from "../../../enums/projectStatusEnum";
import { IProjectStatusProps } from "./projectStatus.type";

const ProjectStatus: React.FC<IProjectStatusProps> = ({projectStatus  }) => {


    switch(projectStatus){
        case ProjectStatusEnum.Cancel:

        return (<div> Cancel</div>)
    }

    switch(projectStatus){
        case ProjectStatusEnum.Pending:

        return (<div> Pending</div>)
    }

    switch(projectStatus){
        case ProjectStatusEnum.Done:

        return (<div> Done</div>)
    }

    switch(projectStatus){
        case ProjectStatusEnum.Inprogres:

        return (<div> Inprogres</div>)
    }

    switch(projectStatus){
        case ProjectStatusEnum.Rejected:

        return (<div> Rejected</div>)
    }

    switch(projectStatus){
        case ProjectStatusEnum.Aproved:

        return (<div> Aproved</div>)
    }
   
  return (
   <div>
    
   </div>
  );
};
export default ProjectStatus;
