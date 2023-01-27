export interface IFormStepperProps {
  touched: any;
  errors: any;
  onFromChange:any,
  values:any,
  timeLine:ITimeLineProps,
  handleUpdateTimeLine:any,

}

export interface ITimeLineProps {
  builder: ITimeSection;
  tiler: ITimeSection;
  housePainter: ITimeSection;
  carpenter: ITimeSection;
  
}
export interface ITimeSection {
  startDate?: Date;
  numberOfDays: number;
}

