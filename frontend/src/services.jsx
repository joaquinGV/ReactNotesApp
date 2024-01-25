const API_URL = "http://localhost:3000";

//Get API notes
export async function getApiNotes() {
  try {
    const response = await fetch(`${API_URL}/api/notes`);
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
