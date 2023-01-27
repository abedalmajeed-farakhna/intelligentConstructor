import { format } from "date-fns";

export const addNumberOfDays = (date, daysNumber) => {
  const d = new Date(date);

  d.setDate(d.getDate() + daysNumber);

  return format(d, "yyyy-MM-dd");
};
