import { format } from "date-fns";

export const addNumberOfDays = (date, daysNumber: number) => {
  const d = new Date(date);
  d.setDate(d.getDate() + daysNumber);
  return format(d, "yyyy-MM-dd");
};

export const getFormatedStringFromDays = (numberOfDays) => {
  var years = Math.floor(numberOfDays / 365);
  var months = Math.floor((numberOfDays % 365) / 30);
  var days = Math.floor((numberOfDays % 365) % 30);

  var yearsDisplay =
    years > 0 ? years + (years == 1 ? " year " : " years ") : "";
  var monthsDisplay =
    months > 0 ? months + (months == 1 ? " month " : " months ") : "";
  var daysDisplay = days > 0 ? days + (days == 1 ? " day" : " days") : "";
  return yearsDisplay + monthsDisplay + daysDisplay;
};