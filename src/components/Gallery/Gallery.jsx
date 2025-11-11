import React from "react";

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

      <div className="gallery__container">
        {images.map((img) => (
          <figure className="gallery__item" key={img.src}>
            <img
              className="gallery__img"
              src={img.src}
              alt={img.alt}
              loading="lazy"
            />
            <figcaption className="gallery__caption">{img.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
