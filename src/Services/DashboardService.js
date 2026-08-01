const API_URL =
  "https://script.google.com/macros/s/AKfycbxslvCGJ8xamcP1F9I6HqS1aKLhxfrugpuEYE03SeLzmZz-xaB7OQJwIXBpZTNVe2Q5sg/exec";

export async function getDashboard(player) {
  try {
    const response = await fetch(
      `${API_URL}?action=dashboard&player=${encodeURIComponent(player.name)}`,
    );

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Failed to load dashboard:", error);
    return null;
  }
}

// const API_URL =
//   "https://script.google.com/macros/s/AKfycbxslvCGJ8xamcP1F9I6HqS1aKLhxfrugpuEYE03SeLzmZz-xaB7OQJwIXBpZTNVe2Q5sg/exec";

// export async function getDashboard(player) {
//   try {
//     const url =
//       `${API_URL}?action=dashboard&player=` + encodeURIComponent(player.name);

//     console.log("Fetching:", url);

//     const response = await fetch(url);

//     console.log("HTTP Status:", response.status);

//     const text = await response.text();

//     console.log("Raw Response:", text);

//     return JSON.parse(text);
//   } catch (error) {
//     console.error("Dashboard Error:", error);
//     return null;
//   }
// }
