import { createContext, useState } from "react";

export const ModalContext = createContext({
  noteToEdit: null,
  createNoteModalOpen: false,
  searchActive: false,
  searchByCategories: false,
  showCreateNoteModal: () => {},
  closeCreateNoteModal: () => {},
  setNoteToEditInModal: () => {},
  setSearchActiveModal: () => {},
  setSearchByCategoriesModal: () => {},
});

const ModalProvider = ({ children }) => {
  const [noteToEdit, setNoteToEdit] = useState(null);
  const [createNoteModalOpen, setCreateNoteModalOpen] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [searchByCategories, setSearchByCategories] = useState(false);

  function showCreateNoteModal() {
    setCreateNoteModalOpen(true);
  }

  function closeCreateNoteModal() {
    setCreateNoteModalOpen(false);
  }

  function setNoteToEditInModal(note) {
    setNoteToEdit(note);
  }
  function setSearchActiveModal() {
    setSearchActive(!searchActive);
  }

  function setSearchByCategoriesModal() {
    setSearchByCategories(!searchByCategories);
  }

  return (
    <ModalContext.Provider
      value={{
        noteToEdit,
        createNoteModalOpen,
        showCreateNoteModal,
        closeCreateNoteModal,
        setNoteToEditInModal,
        searchActive,
        setSearchActiveModal,
        searchByCategories,
        setSearchByCategoriesModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
