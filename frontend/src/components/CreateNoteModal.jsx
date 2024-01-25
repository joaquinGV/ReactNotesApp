// CreateNoteModal.js
import { useState } from "react";
import Modal from "./common/Modal";
import { createNote } from "../services";
import FormGroup from "./common/FormGroup";
import FormCategory from "./common/FormCategory";

const CreateNoteModal = (props) => {
  const [form, setForm] = useState({
    title: "",
    categories: [],
    description: "",
  });

  async function handleAccept() {
    try {
      await createNote(form);
      props.onCreate();
    } catch (error) {
      console.error(error);
    }
  }

  function handleInputOnChange(name, value) {
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  }

  return (
    <Modal
      isOpen={props.isOpen}
      onClose={props.onClose}
      onAccept={handleAccept}
    >
      <h2>Create Note</h2>

      <FormGroup>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          onChange={(e) => handleInputOnChange(e.target.name, e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="categories">Categories</label>
        <FormCategory
          onChange={(event, newValue) =>
            handleInputOnChange("categories", newValue)
          }
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          rows={7}
          onChange={(e) => handleInputOnChange(e.target.name, e.target.value)}
        />
      </FormGroup>
    </Modal>
  );
};

export default CreateNoteModal;
