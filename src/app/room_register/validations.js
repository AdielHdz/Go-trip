import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

const validation = (form) => {
  const errors = {};

  //!Rooms

  if (!form.room) {
    errors.room = "Please introduce a name for you room";
  } else {
    errors.room = "";
  }

  //!Price

  if (!form.price) {
    errors.price = "Please introduce a price for your room";
  } else {
    errors.price = "";
  }

  //!Overview

  if (!form.description) {
    errors.description = "Please introduce a description for your room";
  } else {
    errors.description = "";
  }

  return errors;
};
export default validation;
