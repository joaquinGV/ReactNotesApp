import notesModels from "./models/notes.models.js";

export default class Notes {
  constructor() {
    console.log("Working notes with DB");
  }

  getAll = async () => {
    const notes = await notesModels.find();
    return notes;
  };

  getActive = async () => {
    const notes = await notesModels.find({ archived: true });
    return notes;
  };

  getArchived = async () => {
    const notes = await notesModels.find({ archived: false });
    return notes;
  };

  getOne = async (nid) => {
    const notes = await notesModels.findOne({ _id: nid });
    return notes;
  };

  saveNote = async (note) => {
    const result = await notesModels.create(note);
    return result;
  };

  updateNote = async (nid, note) => {
    const result = await notesModels.findByIdAndUpdate(nid, note, {
      new: true,
    });
    return result;
  };

  deleteNote = async (nid) => {
    const result = await notesModels.findByIdAndDelete(nid);
    return result;
  };
}
