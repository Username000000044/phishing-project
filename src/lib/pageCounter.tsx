import "dotenv/config";

const REST_URL = `https://harmless-polecat-21240.upstash.io`;
const REST_TOKEN = `AVL4AAIjcDE4MmFhNGQ4MGNlMDE0MDA0OWNkOTI3MWJhM2ZiODZmYnAxMA`;

console.log("Upstash URL:", REST_URL);
console.log("Upstash Token:", REST_TOKEN);

export async function incrementVisitCount(): Promise<number> {
  const res = await fetch(`${REST_URL}/incr/page-visits`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${REST_TOKEN}`,
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Failed to increment visit count");
  }

  const data = await res.json();
  return data.result;
}
