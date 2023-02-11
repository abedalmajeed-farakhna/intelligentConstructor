import { ICraftsmanDetailsProps, ICraftsmanStepValuesProps } from "../../../../types/types";
import { ITimeLineProps } from "../formStepper.type";

export interface IBuilderStepProps {
  timeLine: ITimeLineProps;
  handleUpdateTimeLine: (val: ITimeLineProps) => void;
  values: ICraftsmanStepValuesProps;
  builderDetails?:ICraftsmanDetailsProps
}
