import { number } from "yup";
import { ICraftsmanDetailsProps, IRegionProps } from "../../../../types/types";

export interface IProjectDashboardProps {}

export interface IDataProps {
  craftsmans: ICraftsmanDetailsProps[];
  projectName: string;
  region: IRegionProps;
  space: number;
  startDate: Date;
}
