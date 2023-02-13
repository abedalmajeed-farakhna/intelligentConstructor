import { ICraftsmanDetailsProps, ICraftsmanStepValuesProps } from "../../../../types/types";
import { ITimeLineProps } from "../formStepper.type";

export interface ITilerStepProps {
  timeLine: ITimeLineProps;
  handleUpdateTimeLine: (val: ITimeLineProps) => void;
  profileImage?: string;
  values: ICraftsmanStepValuesProps;
  previousDetails?:ICraftsmanDetailsProps
  currentDetails?:ICraftsmanDetailsProps
}
