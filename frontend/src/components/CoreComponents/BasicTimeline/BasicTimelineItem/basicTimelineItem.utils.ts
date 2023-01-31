import { ProjectStatusEnum } from "../../../../enums/projectStatusEnum";
import { theme } from "../../../../theme/themeProvider";

export const getColor = (status: ProjectStatusEnum) => {
  switch (status) {
    case ProjectStatusEnum.Aproved:
      return (theme.colors.approvedColor);
    case ProjectStatusEnum.Done:
      return theme.colors.doneColor;
    case ProjectStatusEnum.Rejected:
      return theme.colors.rejectedColor;
  }
};
