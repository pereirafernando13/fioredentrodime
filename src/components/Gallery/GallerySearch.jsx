import React, { useState } from "react";
import { searchPlants } from "../../services/trefle";

function GallerySearch() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSearch(p = 1) {
    if (!query.trim()) return;
    setLoading(true);
    setError("");

    try {
      const data = await searchPlants(query, p);
      setResults(data.data || []);
      setPage(p);
    } catch (err) {
      setError("⚠️ Unable to fetch data, try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="gallery-search">
      <form
        className="gallery-search__form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch(1);
        }}
      >
        <input
          className="gallery-search__input"
          type="text"
          placeholder="Search flower name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <button className="gallery-search__button" type="submit">
          Search
        </button>
      </form>

      {error && <p className="gallery-search__error">{error}</p>}
      {loading && <p className="gallery-search__loading">Loading...</p>}

      <div className="gallery-search__results">
        {results.map((item) => (
          <figure className="gallery-search__item" key={item.id}>
            <img
              src={item.image_url || "/placeholder.jpg"}
              alt={item.common_name || item.scientific_name}
              className="gallery-search__img"
              loading="lazy"
            />
            <figcaption className="gallery-search__caption">
              <strong>{item.common_name || "Unknown"}</strong>
              <br />
              <em>{item.scientific_name}</em>
            </figcaption>
          </figure>
        ))}
      </div>

      {results.length > 0 && (
        <div className="gallery-search__pagination">
          <button disabled={page <= 1} onClick={() => handleSearch(page - 1)}>
            ← Prev
          </button>
          <span>Page {page}</span>
          <button onClick={() => handleSearch(page + 1)}>Next →</button>
        </div>
      )}
    </div>
  );
}

export default GallerySearch;
