import React, { useState } from "react";
import { searchPlants } from "../../services/trefle";

export default function PlantExplorer() {
  const [q, setQ] = useState("");
  const [page, setPage] = useState(1);
  const [hits, setHits] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  async function run(p = 1) {
    if (!q.trim()) return;
    setLoading(true);
    setErr("");
    try {
      const res = await searchPlants(q, p);
      setHits(res.data || []);
      setPage(p);
    } catch (e) {
      setErr("Não foi possível buscar agora.");
    } finally {
      setLoading(false);
    }
  }

  const getImg = (it) =>
    it.image_url ||
    it.default_image?.medium_url ||
    it.default_image?.original_url ||
    it.images?.flower?.[0]?.image_url ||
    it.images?.habit?.[0]?.image_url ||
    "/placeholder.jpg";

  return (
    <section className="explorer" aria-label="Explorar plantas (Trefle)">
      <h1 className="explorer__title">Explorar plantas</h1>

      <form
        className="explorer__form"
        onSubmit={(e) => {
          e.preventDefault();
          run(1);
        }}
      >
        <input
          className="explorer__input"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="ex: dandelion, lantana, rosa…"
        />
        <button className="explorer__button">Buscar</button>
      </form>

      {err && <p className="explorer__error">{err}</p>}
      {loading && <p className="explorer__loading">Carregando…</p>}

      <div className="explorer__grid">
        {hits.map((it) => (
          <figure className="explorer__item" key={it.id}>
            <img
              className="explorer__img"
              src={getImg(it)}
              alt={it.common_name || it.scientific_name}
              loading="lazy"
            />
            <figcaption className="explorer__caption">
              <strong>{it.common_name || "—"}</strong>
              <br />
              <em>{it.scientific_name}</em>
            </figcaption>
          </figure>
        ))}
      </div>

      {!!hits.length && (
        <div className="explorer__pager">
          <button disabled={page <= 1} onClick={() => run(page - 1)}>
            ← Anterior
          </button>
          <span>Página {page}</span>
          <button onClick={() => run(page + 1)}>Próxima →</button>
        </div>
      )}
    </section>
  );
}
