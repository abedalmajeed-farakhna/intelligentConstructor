import { ICraftsmanStepValuesProps, ICraftsmanDetailsProps } from "../../../../types/types";
import { ITimeLineProps } from "../formStepper.type";

export interface ICarpenterStepProps {
  timeLine: ITimeLineProps;
  handleUpdateTimeLine: (val: ITimeLineProps) => void;
  values: ICraftsmanStepValuesProps;
  currentDetails?: ICraftsmanDetailsProps;
  previousDetails?: ICraftsmanDetailsProps;
}