import { ProjectStatusEnum } from "../../../enums/projectStatusEnum";
import { sectorEnum } from "../../../enums/sectorEnum";

export interface IProjectDetailsProps {



}
export interface IDataProps {
  projectName: string;
  space: number;
  startDate: Date;
  craftsmans: ICraftsmansProps[];
}

export interface ICraftsmansProps {

     userName :string;
     fullName :  string;
     expectedStartDate: Date;
     expectedEndDate :  Date;
     projectStatus :ProjectStatusEnum;
     sector:sectorEnum;

}
