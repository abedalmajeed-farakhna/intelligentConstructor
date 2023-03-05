import { ProjectStatusEnum } from "../enums/projectStatusEnum";
import { sectorEnum } from "../enums/sectorEnum";

export const getSectorEnumDescriptions = (sector: sectorEnum): string => {
  switch (sector) {
    case sectorEnum.Builder:
      return "Builder";
    case sectorEnum.Tiler:
      return "Tiler";

    case sectorEnum.HousePainter:
      return "House Painter";

    case sectorEnum.Carpenter:
      return "Carpenter";

    case sectorEnum.Electrician:
      return "Electrician";

    case sectorEnum.Plumber:
      return "Plumber";

    case sectorEnum.NONE:
      return "-";

    default:
      return "";
  }
};

export const getProjectStatusDescription = (
  status: ProjectStatusEnum
): string => {
  switch (status) {
    case ProjectStatusEnum.Pending:
      return "Pending";
    case ProjectStatusEnum.Done:
      return "Done";

    case ProjectStatusEnum.Inprogres:
      return "Inprogres";

    case ProjectStatusEnum.Rejected:
      return "Rejected";

    case ProjectStatusEnum.Aproved:
      return "Aproved";

    case ProjectStatusEnum.Cancel:
      return "Cancel";

    default:
      return "";
  }
};
