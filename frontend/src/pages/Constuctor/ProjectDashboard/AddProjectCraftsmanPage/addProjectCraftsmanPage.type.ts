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

export const dataInitialValue = {
  craftsmans: [],
  projectName: "",
  region: { id: 0, name: "" },
  space: 0,
  startDate: new Date(),
};
