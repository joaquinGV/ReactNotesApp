import { Router } from "express";
import Notes from "../DAOs/notes.manager.js";

const router = Router();
const notesManager = new Notes();

// GET /api/notes
router.get("/", async (req, res) => {
  try {
    const notes = await notesManager.getAll();
    res.send({ status: "success", payload: notes });
  } catch (error) {
    res.status(500).send({ status: "error", message: error.message });
  }
});

// GET unarchived /api/notes
router.get("/active", async (req, res) => {
  try {
    const notes = await notesManager.getActive();
    res.send({ status: "success", payload: notes });
  } catch (error) {
    res.status(500).send({ status: "error", message: error.message });
  }
});
// GET archived /api/notes
router.get("/archived", async (req, res) => {
  try {
    const notes = await notesManager.getArchived();
    res.send({ status: "success", payload: notes });
  } catch (error) {
    res.status(500).send({ status: "error", message: error.message });
  }
});

// POST /api/notes
router.post("/", async (req, res) => {
  try {
    const notes = await notesManager.saveNote(req.body);

    res.status(201).send({ payload: notes });
  } catch (error) {
    res.status(500).send({ status: "error", message: error.message });
  }
});

// GET /api/notes/:id
router.get("/:nid", async (req, res) => {
  try {
    const { nid } = req.params;
    const notes = await notesManager.getOne(nid);
    res.send({ status: "success", payload: notes });
  } catch (error) {
    res.status(500).send({ status: "error", message: error.message });
  }
});

// PUT /api/notes/:id
router.put("/:nid", async (req, res) => {
  try {
    const { nid } = req.params;
    const notes = await notesManager.updateNote(nid, req.body);
    res.send({ status: "success", payload: notes });
  } catch (error) {
    res.status(500).send({ status: "error", message: error.message });
  }
});

// DELETE /api/notes/:nid
router.delete("/:nid", async (req, res) => {
  try {
    const notes = await notesManager.deleteNote(req.params.nid);
    res.send({ status: "success", payload: notes });
  } catch (error) {
    res.status(500).send({ status: "error", message: error.message });
  }
});

export default router;
