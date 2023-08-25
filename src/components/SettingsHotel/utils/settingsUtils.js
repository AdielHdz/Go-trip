import { ChangeEvent } from "react";

export const editDataHandler = (event, editData, setEditData) => {
  const property = event.target.name;
  const value = event.target.value;
  setEditData({ ...editData, [property]: value });
};

export const activateEdit = (editIsDisabled, setEditIsDisabled) => {
  if (editIsDisabled) {
    setEditIsDisabled("");
  } else {
    setEditIsDisabled("hidden");
  }
};
