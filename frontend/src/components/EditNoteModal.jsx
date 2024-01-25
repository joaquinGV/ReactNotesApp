import { useState } from "react";
import Modal from "./common/Modal";
import { editNote } from "../services";
import FormGroup from "./common/FormGroup";
import FormCategory from "./common/FormCategory";

const EditNotesModal = (props) => {
  const [form, setForm] = useState({
    title: props.note.title,
    categories: [...props.note.categories],
    description: props.note.description,
  });

  function handleInputOnChange(name, value) {
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  }

  async function handleAccept() {
    try {
      const id = props.note._id;
      await editNote(id, form);
      props.onEdit();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Modal
        isOpen={props.isOpen}
        onAccept={handleAccept}
        onClose={props.onClose}
      >
        <h2>Edit Note</h2>
        <FormGroup>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={form.title}
            onChange={handleInputOnChange}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="categories">Categories</label>
          <FormCategory
            categories={form.categories}
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
            value={form.description}
            rows={7}
            onChange={handleInputOnChange}
          />
        </FormGroup>
      </Modal>
    </>
  );
};

export default EditNotesModal;
