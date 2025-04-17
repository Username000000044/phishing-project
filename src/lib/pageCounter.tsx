import "dotenv/config";

const UPSTASH_REST_URL = `https://harmless-polecat-21240.upstash.io`;
const UPSTASH_REST_TOKEN = `Bearer AVL4AAIjcDE4MmFhNGQ4MGNlMDE0MDA0OWNkOTI3MWJhM2ZiODZmYnAxMA`;

const headers = {
  Authorization: UPSTASH_REST_TOKEN,
  "Content-Type": "application/json",
};

export async function incrementVisitCount() {
  const res = await fetch(`${UPSTASH_REST_URL}/incr/page-visits`, {
    method: "POST",
    headers,
  });
  const data = await res.json();
  return data.result;
}

export async function getVisitCount() {
  const res = await fetch(`${UPSTASH_REST_URL}/get/page-visits`, {
    method: "GET",
    headers,
  });
  const data = await res.json();
  return data.result;
}
