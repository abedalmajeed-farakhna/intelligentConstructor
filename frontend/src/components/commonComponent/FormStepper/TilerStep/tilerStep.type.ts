import { ICraftsmanDetailsProps } from "../../../../types/types";
import { ITimeLineProps } from "../formStepper.type";

export interface ITilerStepProps {
  timeLine: ITimeLineProps;
  handleUpdateTimeLine: (val: ITimeLineProps) => void;
  profileImage?: string;
  values: any;
  builderDetails?:ICraftsmanDetailsProps
  tilerDetails?:ICraftsmanDetailsProps
}
