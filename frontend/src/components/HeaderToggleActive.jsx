import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { ModalContext } from "../context/ModalContext";
import { useContext } from "react";

export default function HeaderToggleActive() {
  const { searchActive, setSearchActiveModal, setSearchByCategoriesModal } =
    useContext(ModalContext);

  return (
    <>
      <FormControlLabel
        control={<Switch />}
        label={searchActive ? "Archived Notes" : "Active Notes"}
        onClick={setSearchActiveModal}
      />
      <FormControlLabel
        control={<Switch />}
        label="Search By Categories"
        onClick={setSearchByCategoriesModal}
      />
    </>
  );
}
