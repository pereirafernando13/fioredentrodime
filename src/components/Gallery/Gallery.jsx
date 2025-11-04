import React from "react";
import GallerySearch from "./GallerySearch.jsx";

const images = [
  {
    src: "/Ranunculus__gallery.JPEG",
    alt: "Ranunculus",
    caption: "Ranunculus",
  },
  { src: "/Bellis-perennis__gallery.JPEG", alt: "Bellis", caption: "Bellis" },
  { src: "/Chicory__gallery.JPEG", alt: "Chicory", caption: "Chicory" },
  {
    src: "/Common-morning-glory__gallery.JPEG",
    alt: "Common Morning Glory",
    caption: "Common Morning Glory",
  },
  { src: "/Dandelion__gallery.JPEG", alt: "Dandelion", caption: "Dandelion" },
  {
    src: "/dwarf__morning-glory__gallery.JPEG",
    alt: "Dwarf Morning Glory",
    caption: "Dwarf Morning Glory",
  },
  { src: "/Lantana__gallery.JPEG", alt: "Lantana", caption: "Lantana" },
  {
    src: "/Mointain-arnic__gallery.JPEG",
    alt: "Mountain Arnic",
    caption: "Mountain Arnic",
  },
  {
    src: "/Patterson's-curse__gallery.JPEG",
    alt: "Patterson's Curse",
    caption: "Patterson's Curse",
  },
  {
    src: "/Wild-mustard__gallery.JPEG",
    alt: "Wild Mustard",
    caption: "Wild Mustard",
  },
];

function Gallery() {
  return (
    <section className="gallery" aria-label="Galeria de flores">
      <h1 className="gallery__title">Gallery</h1>

      <div className="gallery__layout">
        {/* Sidebar com a busca */}
        <aside className="gallery__sidebar" aria-label="Busca e filtros">
          <h2 className="gallery__sidebar-title">Buscar</h2>
          <GallerySearch />
        </aside>

        {/* Conteúdo principal: grid 3 colunas */}
        <div className="gallery__content">
          <div className="gallery__grid">
            {images.map((img) => (
              <figure className="gallery__item" key={img.src}>
                <img
                  className="gallery__img"
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                />
                <figcaption className="gallery__caption">
                  {img.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
