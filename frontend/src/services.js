const API_URL = "http://localhost:8080";

// Get all notes
export async function getApiNotes() {
  try {
    const response = await fetch(`${API_URL}/api/notes`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error: ", error.message);
  }
}

export async function getActiveNotes(active = true) {
  try {
    let word = active ? "active" : "archived";
    const response = await fetch(`${API_URL}/api/notes/${word}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error: ", error.message);
  }
}

// Create a new Note
export async function createNote(payload) {
  try {
    const response = await fetch(`${API_URL}/api/notes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error", error);
  }
}

// Update note data
export async function editNote(id, payload) {
  try {
    const response = await fetch(`${API_URL}/api/notes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error", error);
  }
}

// Update note data
export async function archiveNote(id, status) {
  try {
    const response = await fetch(`${API_URL}/api/notes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ archived: !status }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error", error);
  }
}

// Delete a note data
export async function deleteNote(id) {
  try {
    const response = await fetch(`${API_URL}/api/notes/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error", error);
  }
}
