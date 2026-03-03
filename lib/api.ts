// src/lib/api.ts
const API_URL = "http://localhost:1337/api";

export async function fetchAPI(path: string) {
  const res = await fetch(`${API_URL}${path}`);
  const data = await res.json();
  return data.data;
}