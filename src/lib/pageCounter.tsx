import "dotenv/config";

const REST_URL = `https://harmless-polecat-21240.upstash.io`;
const REST_TOKEN = `AVL4AAIjcDE4MmFhNGQ4MGNlMDE0MDA0OWNkOTI3MWJhM2ZiODZmYnAxMA`;

console.log("Upstash URL:", REST_URL);
console.log("Upstash Token:", REST_TOKEN);

const headers: HeadersInit = {
  Authorization: `Bearer ${REST_TOKEN}`,
  "Content-Type": "application/json",
};

export async function incrementVisitCount() {
  console.log("Making API call to increment visit count"); // Debug log to confirm function is called
  const res = await fetch(`${REST_URL}/incr/page-visits`, {
    method: "POST",
    headers,
  });

  if (!res.ok) {
    throw new Error("Failed to update visit count");
  }

  const data = await res.json();
  console.log("Response from Redis:", data); // Log the response from Redis
  return data.result;
}
