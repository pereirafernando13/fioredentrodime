// /api/trefle-claim.js
export default async function handler(req, res) {
  try {
    // Em produção na Vercel, esse header vem certinho. Se não vier, usa VERCEL_URL.
    const isDev = process.env.NODE_ENV !== "production";

    // Em DEV, sempre emite JWT para http://localhost:5173
    const origin = isDev
      ? "http://localhost:5173"
      : req.headers.origin ||
        (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null);
    const token = process.env.TREFLE_TOKEN;

    const r = await fetch("https://trefle.io/api/auth/claim", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ origin, token }),
      cache: "no-store", // 👈
    });

    if (!r.ok) {
      const txt = await r.text();
      return res.status(r.status).json({ error: "claim_failed", detail: txt });
    }

    const data = await r.json(); // { token, expiration }
    res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate");
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Expires", "0");
    return res.status(200).json(data);
  } catch (e) {
    return res.status(500).json({ error: "server_error", detail: String(e) });
  }
}
