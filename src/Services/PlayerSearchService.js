const API_URL =
  "https://script.google.com/macros/s/AKfycbxslvCGJ8xamcP1F9I6HqS1aKLhxfrugpuEYE03SeLzmZz-xaB7OQJwIXBpZTNVe2Q5sg/exec";

export async function searchPlayers(query) {
  if (!query || query.length < 2) return [];

  try {
    const response = await fetch(
      `${API_URL}?action=search&q=${encodeURIComponent(query)}`,
    );

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();

    return Array.isArray(data) ? data : [];
  } catch (err) {
    console.error(err);
    return [];
  }
}
