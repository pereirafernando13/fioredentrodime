export default async function handler(req, res) {
  try {
    const origin =
      req.headers.origin || process.env.PUBLIC_URL || "http://localhost:5173";
    const token = process.env.TREFLE_TOKEN;

    const r = await fetch("https://trefle.io/api/auth/claim", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ origin, token }),
    });

    if (!r.ok) {
      const txt = await r.text();
      return res.status(r.status).json({ error: "claim_failed", detail: txt });
    }

    const data = await r.json(); // { token, expiration }
    return res.status(200).json(data);
  } catch (e) {
    return res.status(500).json({ error: "server_error", detail: String(e) });
  }
}
