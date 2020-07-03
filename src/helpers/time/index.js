import moment from "moment";

export const convertTime = (time) => {
  return moment(time).format("HH:mm");
};

export const convertDate = (date) => {
  return moment(date).format("D/MM/YYYY");
};

export const convertWeekDay = (date) => {
  return moment(date).format("dddd");
};

export const convertWeekDayNumber = (date) => {
  return moment(date).format("E");
};

export const subtractDate = (dropOff, pickUp) => {
  return moment(dropOff).diff(moment(pickUp), "days", true);
};

export const addDays = (date, dayNum) => {
  return moment(date).add(dayNum, "day")._d;
};
