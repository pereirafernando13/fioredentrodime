let clientToken = null;
let expAt = 0;

async function fetchClientToken() {
  const r = await fetch("/api/trefle-claim", { cache: "no-store" });
  if (!r.ok) throw new Error("Falha no claim");
  const data = await r.json();
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

async function fetchNoStore(url) {
  return fetch(url, {
    cache: "no-store",
    headers: { Accept: "application/json" },
  });
}

export async function searchPlants(query, page = 1) {
  let token = await ensureToken();
  let url = `${BASE}/plants/search?token=${encodeURIComponent(token)}&q=${encodeURIComponent(query)}&page=${page}&_t=${Date.now()}`;

  let r = await fetchNoStore(url);

  if (r.status === 401) {
    clientToken = null;
    await fetchClientToken();
    token = await ensureToken();
    url = `${BASE}/plants/search?token=${encodeURIComponent(token)}&q=${encodeURIComponent(query)}&page=${page}&_t=${Date.now()}`;
    r = await fetchNoStore(url);
  }

  if (!r.ok) throw new Error(`Erro ${r.status} ao buscar plantas`);
  return r.json();
}

export async function getSpecies(slug) {
  let token = await ensureToken();
  let url = `${BASE}/species/${slug}?token=${encodeURIComponent(token)}&_t=${Date.now()}`;

  let r = await fetchNoStore(url);

  if (r.status === 401) {
    clientToken = null;
    await fetchClientToken();
    token = await ensureToken();
    url = `${BASE}/species/${slug}?token=${encodeURIComponent(token)}&_t=${Date.now()}`;
    r = await fetchNoStore(url);
  }

  if (!r.ok) throw new Error(`Erro ${r.status} ao buscar espécie`);
  return r.json();
}
