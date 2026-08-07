// const API_URL =
//   "https://script.google.com/macros/s/AKfycbxslvCGJ8xamcP1F9I6HqS1aKLhxfrugpuEYE03SeLzmZz-xaB7OQJwIXBpZTNVe2Q5sg/exec";

// export async function getLeagueCentre() {
//   const response = await fetch(`${API_URL}?action=live`);

//   if (!response.ok) {
//     throw new Error("Failed to load Live Centre data.");
//   }

//   return await response.json();
// }

const API_URL =
  "https://script.google.com/macros/s/AKfycbxslvCGJ8xamcP1F9I6HqS1aKLhxfrugpuEYE03SeLzmZz-xaB7OQJwIXBpZTNVe2Q5sg/exec";

export async function getLeagueCentre() {
  console.log("Fetching:", `${API_URL}?action=live`);

  const response = await fetch(`${API_URL}?action=live`);

  console.log("Status:", response.status);
  console.log("URL:", response.url);

  const text = await response.text();
  console.log(text);

  return JSON.parse(text);
}
