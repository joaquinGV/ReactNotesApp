import { useContext, useEffect, useState } from "react";
import "./App.css";
import ApplicationTitle from "./components/ApplicationTitle";
import CardNoteGrid from "./components/CardNoteGrid";
import CardNotes from "./components/CardNotes";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import { deleteNote, getActiveNotes, archiveNote } from "./services";
import CreateNoteModal from "./components/CreateNoteModal";
import EditNotesModal from "./components/EditNoteModal";
import { ModalContext } from "./context/ModalContext";

function Home() {
  const [notes, setNotes] = useState([]);
  const [filteredNotes, setFilteredNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const {
    noteToEdit,
    createNoteModalOpen,
    searchActive,
    searchByCategories,
    closeCreateNoteModal,
    setNoteToEditInModal,
  } = useContext(ModalContext);

  async function getNotes() {
    const notes = await getActiveNotes(searchActive);
    setNotes(notes.payload);
  }

  function getFilteredNotes() {
    const filteredNotes = notes.filter((note) => {
      if (!searchByCategories) {
        return (
          note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          note.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
      } else {
        return note.categories.some((cat) =>
          cat.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
    });
    return filteredNotes;
  }

  useEffect(() => {
    getNotes();
  }, [searchActive]);

  useEffect(() => {
    if (searchTerm) {
      const filteredNotes = getFilteredNotes();
      setFilteredNotes(filteredNotes);
    }
  }, [searchTerm]);

  async function handleOnCreate() {
    closeCreateNoteModal();
    await getNotes();
  }

  async function handleOnEdit() {
    setNoteToEditInModal(null);
    await getNotes();
  }

  function handleOnEditNote(note) {
    setNoteToEditInModal(note);
  }

  async function handleOnRemoveNote(id) {
    try {
      await deleteNote(id);
      await getNotes();
    } catch (error) {
      console.error(error);
    }
  }
  async function handleOnArchive(id, status) {
    try {
      await archiveNote(id, status);
      await getNotes();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <div>
        <ApplicationTitle />
        <div>
          <SearchInput
            onSearch={(value) => {
              setSearchTerm(value);
            }}
          />
        </div>
        <Header />
      </div>
      <CardNoteGrid>
        {(filteredNotes.length > 0 && searchTerm !== ""
          ? [...filteredNotes]
          : [...notes]
        ).map((note) => (
          <CardNotes
            key={note._id}
            title={note.title}
            description={note.description}
            onEdit={() => {
              handleOnEditNote(note);
            }}
            onRemove={() => {
              handleOnRemoveNote(note._id);
            }}
            onArchived={() => {
              handleOnArchive(note._id, note.archived);
            }}
          />
        ))}
      </CardNoteGrid>
      <CreateNoteModal
        isOpen={createNoteModalOpen}
        onClose={closeCreateNoteModal}
        onCreate={handleOnCreate}
      />
      {noteToEdit !== null && (
        <EditNotesModal
          note={noteToEdit}
          isOpen
          onClose={() => setNoteToEditInModal(null)}
          onEdit={handleOnEdit}
        />
      )}
    </div>
  );
}

export default Home;
