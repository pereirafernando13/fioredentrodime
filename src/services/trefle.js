let clientToken = null;
let expAt = 0;

async function fetchClientToken() {
  const r = await fetch("/api/trefle-claim");
  if (!r.ok) throw new Error("Falha no claim");
  const data = await r.json(); // { token, expiration }
  clientToken = data.token;
  try {
    expAt = data.expiration ? Date.parse(data.expiration) : 0;
  } catch (_) {}
}

async function ensureToken() {
  const now = Date.now();
  if (!clientToken || (expAt && now > expAt - 10 * 60 * 1000)) {
    await fetchClientToken();
  }
  return clientToken;
}

const BASE = "https://trefle.io/api/v1";

export async function searchPlants(query, page = 1) {
  const token = await ensureToken();
  const url = `${BASE}/plants/search?token=${encodeURIComponent(token)}&q=${encodeURIComponent(query)}&page=${page}`;
  const r = await fetch(url);
  if (!r.ok) throw new Error(`Erro ${r.status} ao buscar plantas`);
  return r.json();
}

export async function getSpecies(slug) {
  const token = await ensureToken();
  const url = `${BASE}/species/${slug}?token=${encodeURIComponent(token)}`;
  const r = await fetch(url);
  if (!r.ok) throw new Error(`Erro ${r.status} ao buscar espécie`);
  return r.json();
}
