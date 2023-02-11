import {
  ICraftsmanDetailsProps,
  ICraftsmanStepValuesProps,
} from "../../../../types/types";
import { ITimeLineProps } from "../formStepper.type";

export interface IHousePainterStepProps {
  timeLine: ITimeLineProps;
  handleUpdateTimeLine: (val: ITimeLineProps) => void;
//  profileImage?: string;
  values: ICraftsmanStepValuesProps;
  currentDetails?: ICraftsmanDetailsProps;
  previousDetails?: ICraftsmanDetailsProps;
}
