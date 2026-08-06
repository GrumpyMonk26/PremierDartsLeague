const API_URL =
  "https://script.google.com/macros/s/AKfycbxslvCGJ8xamcP1F9I6HqS1aKLhxfrugpuEYE03SeLzmZz-xaB7OQJwIXBpZTNVe2Q5sg/exec";

export async function getCurrentSeason() {
  try {
    const response = await fetch(`${API_URL}?action=season`);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    return await response.json();
  } catch (err) {
    console.error(err);
    return [];
  }
}
