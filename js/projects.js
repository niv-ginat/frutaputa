/*
  FRUTA PUTA — PROJECT LIST
  ------------------------------------------------------------
  This one file drives the homepage index and every project page.
  To add a project, copy a block, give it a unique `slug`, and fill it in.

  slug        used in the link: project.html#<slug>
  title       project name
  year        number, used for the chronological order
  month       optional 1–12, orders projects within the same year
  place       city
  type        Mural / Tiles / Painting / Object / Print / Drop ...
  client      optional
  cover       image or video shown in the index and at the top of the page
  description paragraphs (one string per paragraph). Empty = nothing shown.
  media       gallery: images (.jpg/.png/.gif) or videos (.mp4)

  Projects marked TODO still need a description and more photos.
*/
window.PROJECTS = [
  {
    slug: "eleanor-tiles",
    title: "Eleanor Tiles",
    year: 2024,
    place: "Madrid",
    type: "Tiles",
    cover: "images/Eleanor/eleanor_thumbnail.png",
    description: [], // TODO
    media: ["images/Eleanor/eleanor_thumbnail.png"],
  },
  {
    slug: "funfun-mural",
    title: "Funfun Mural",
    year: 2023,
    place: "Madrid",
    type: "Mural",
    cover: "images/mural/funfun_thumbnail.jpg",
    description: [], // TODO
    media: ["images/mural/funfun_thumbnail.jpg"],
  },
  {
    slug: "tikva-tiles",
    title: "Tikva Tiles",
    year: 2023,
    place: "Madrid",
    type: "Tiles",
    cover: "video/version1.mp4",
    description: [], // TODO
    media: ["video/version1.mp4"],
  },
  {
    slug: "papaya-still-life",
    title: "Papaya Still Life",
    year: 2023,
    place: "Los Angeles",
    type: "Painting",
    cover: "images/thumbnails/Silvia.png",
    description: [], // TODO
    media: ["images/thumbnails/Silvia.png"],
  },
  {
    slug: "gift-for-mitch-and-sara",
    title: "Gift for Mitch & Sara",
    year: 2022,
    place: "Nashville",
    type: "Commission",
    cover: "images/thumbnails/ms_thumbnail.png",
    description: [], // TODO
    media: ["images/thumbnails/ms_thumbnail.png"],
  },
  {
    slug: "care-packages",
    title: "Care Packages",
    year: 2021,
    place: "Nashville",
    type: "Objects",
    cover: "images/care-package/fp_carepackages_letitbe.jpg",
    description: [], // TODO
    media: [
      "images/care-package/fp_carepackages_letitbe.jpg",
      "images/care-package/fp_carepackages_papaya.jpg",
      "images/care-package/fp_carepackages_hands.jpg",
      "images/care-package/fp_carepackages_nuance.jpg",
      "images/care-package/fp_carepackages_stillife.jpg",
    ],
  },
  {
    slug: "fruta-puta-nightstand",
    title: "Fruta Puta Nightstand",
    year: 2021,
    place: "Nashville",
    type: "Furniture",
    cover: "images/thumbnails/nightstand_thumbnail_2.png",
    description: [], // TODO
    media: [
      "images/thumbnails/nightstand_thumbnail_2.png",
      "images/thumbnails/nightstand_thumbnail.png",
    ],
  },
];

/* Contact details used across the site */
window.FP_CONTACT = {
  email: "niv.ginat@gmail.com",
  instagram: "https://www.instagram.com/vivafrutaputa/",
};
