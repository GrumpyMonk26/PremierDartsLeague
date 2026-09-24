const API_URL =
  "https://script.google.com/macros/s/AKfycbxslvCGJ8xamcP1F9I6HqS1aKLhxfrugpuEYE03SeLzmZz-xaB7OQJwIXBpZTNVe2Q5sg/exec";

export async function searchPlayers(query) {
  if (!query || query.trim().length < 2) {
    return [];
  }

  try {
    const response = await fetch(
      `${API_URL}?action=search&q=${encodeURIComponent(query.trim())}`,
    );

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();

    console.log("PLAYER SEARCH RESPONSE:", data);

    // ==========================
    // API returns:
    // {
    //   success: true,
    //   matches: [...]
    // }
    // ==========================

    if (!data || !data.success || !Array.isArray(data.matches)) {
      return [];
    }

    // ==========================
    // Convert API format into
    // format PlayerSearch.jsx uses
    // ==========================

    return data.matches.map((player) => ({
      ...player,

      name: player.dcName || player.tableName || "",
    }));
  } catch (err) {
    console.error("Player search failed:", err);

    return [];
  }
}
