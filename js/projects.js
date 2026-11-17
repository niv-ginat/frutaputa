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
  cover       still image: index thumbnail (mobile), video poster, share image
  loop        optional short silent clip (video/loops/<slug>.mp4), plays on hover
              in the index and leads the project page
  youtube     optional YouTube video ID (the part after watch?v=) for the full film
  description paragraphs (one string per paragraph). Empty = nothing shown.
  media       gallery: images (.jpg/.png/.gif) or videos (.mp4)

  Media lives in images/projects/<slug>/ and video/loops/.
  Projects marked TODO still need a description.
*/
window.PROJECTS = [
  {
    slug: "alimentacion-mural",
    title: "Alimentación Mural",
    year: 2025,
    place: "Madrid",
    type: "Mural",
    cover: "images/projects/alimentacion-mural/detail-6.jpg",
    loop: "video/loops/alimentacion-mural.mp4",
    description: [], // TODO
    media: [
      "images/projects/alimentacion-mural/detail-6.jpg",
      "images/projects/alimentacion-mural/detail-1.jpg",
      "images/projects/alimentacion-mural/detail-4.jpg",
      "images/projects/alimentacion-mural/detail-5.jpg",
      "images/projects/alimentacion-mural/detail-3.jpg",
      "images/projects/alimentacion-mural/post-106.jpg",
      "images/projects/alimentacion-mural/detail-2.jpg",
      "images/projects/alimentacion-mural/artist-1.jpg",
      "images/projects/alimentacion-mural/artist-2.jpg",
      "images/projects/alimentacion-mural/artist-3.jpg",
    ],
  },
  {
    slug: "the-dollies",
    title: "The Dollies",
    year: 2025,
    place: "", // TODO: city
    type: "Mural",
    cover: "images/projects/the-dollies/poster.jpg",
    loop: "video/loops/the-dollies.mp4",
    description: [], // TODO
    media: [],
  },
  {
    slug: "belen-lopez-mural",
    title: "Belén López Mural",
    year: 2024,
    place: "Madrid",
    type: "Mural",
    cover: "images/projects/belen-lopez-mural/angle.jpg",
    loop: "video/loops/belen-lopez-mural.mp4",
    description: [], // TODO
    media: [
      "images/projects/belen-lopez-mural/angle.jpg",
      "images/projects/belen-lopez-mural/hand.jpg",
      "images/projects/belen-lopez-mural/frutaputa-v2.jpg",
      "images/projects/belen-lopez-mural/map.jpg",
      "images/projects/belen-lopez-mural/chinaman.jpg",
    ],
  },
  {
    slug: "hola-vecinas",
    title: "Hola Vecinas",
    year: 2024,
    place: "Madrid",
    type: "Mural",
    cover: "images/projects/hola-vecinas/poster.jpg",
    loop: "video/loops/hola-vecinas.mp4",
    description: [], // TODO
    media: ["video/loops/hola-vecinas-hands.mp4"],
  },
  {
    slug: "eleanor-tiles",
    title: "Eleanor Tiles",
    year: 2024,
    place: "Madrid",
    type: "Tiles",
    cover: "images/projects/eleanor-tiles/cover.jpg",
    description: [], // TODO
    media: ["images/projects/eleanor-tiles/cover.jpg"],
  },
  {
    slug: "a-namoradeira",
    title: "A Namoradeira",
    year: 2024,
    place: "Madrid",
    type: "Tiles",
    cover: "images/projects/a-namoradeira/overhead.jpg",
    description: [], // TODO
    media: [
      "images/projects/a-namoradeira/overhead.jpg",
      "images/projects/a-namoradeira/detail-tile.jpg",
      "images/projects/a-namoradeira/detail-table.jpg",
      "images/projects/a-namoradeira/detail.jpg",
      "images/projects/a-namoradeira/milena.jpg",
      "images/projects/a-namoradeira/niv.jpg",
    ],
  },
  {
    slug: "rotating-vase",
    title: "Rotating Vase",
    year: 2024,
    place: "Madrid · Sevilla · Iceland · Los Angeles",
    type: "Ceramics",
    cover: "images/projects/rotating-vase/cover.jpg",
    loop: "video/loops/rotating-vase.mp4",
    description: [], // TODO
    media: ["images/projects/rotating-vase/cover.jpg"],
  },
  {
    slug: "funfun-mural",
    title: "Funfun Mural",
    year: 2023,
    place: "Madrid",
    type: "Mural",
    cover: "images/projects/funfun-mural/cover.jpg",
    loop: "video/loops/funfun-mural.mp4",
    description: [], // TODO
    media: [
      "images/projects/funfun-mural/cover.jpg",
      "images/projects/funfun-mural/post-30.jpg",
      "images/projects/funfun-mural/post-31.jpg",
      "images/projects/funfun-mural/post-32.jpg",
      "images/projects/funfun-mural/1_1.jpg",
      "images/projects/funfun-mural/1_1-1.jpg",
      "images/projects/funfun-mural/1_1-2.jpg",
    ],
  },
  {
    slug: "tikva-tiles",
    title: "Tikva Tiles",
    year: 2023,
    place: "Madrid",
    type: "Tiles",
    cover: "images/projects/tikva-tiles/poster.jpg",
    loop: "video/loops/tikva-tiles.mp4",
    description: [], // TODO
    media: ["video/loops/tikva-table.mp4"],
  },
  {
    slug: "papaya-still-life",
    title: "Papaya Still Life",
    year: 2023,
    place: "Los Angeles",
    type: "Painting",
    cover: "images/projects/papaya-still-life/cover.jpg",
    description: [], // TODO
    media: ["images/projects/papaya-still-life/cover.jpg"],
  },
  {
    slug: "marta-madrid-stencil",
    title: "Marta",
    year: 2022,
    place: "Madrid",
    type: "Stencil",
    cover: "images/projects/marta-madrid-stencil/cover.jpg",
    loop: "video/loops/marta-madrid-stencil.mp4",
    description: [], // TODO
    media: ["images/projects/marta-madrid-stencil/cover.jpg"],
  },
  {
    slug: "gift-for-mitch-and-sara",
    title: "Gift for Mitch & Sara",
    year: 2022,
    place: "Nashville",
    type: "Commission",
    cover: "images/projects/gift-for-mitch-and-sara/cover.jpg",
    loop: "video/loops/gift-for-mitch-and-sara.mp4",
    description: [], // TODO
    media: ["images/projects/gift-for-mitch-and-sara/cover.jpg"],
  },
  {
    slug: "care-packages",
    title: "Care Packages",
    year: 2021,
    place: "Nashville",
    type: "Objects",
    cover: "images/projects/care-packages/papaya.jpg",
    description: [], // TODO
    media: [
      "images/projects/care-packages/papaya.jpg",
      "images/projects/care-packages/beatles.jpg",
      "images/projects/care-packages/hands.jpg",
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
    cover: "images/projects/fruta-puta-nightstand/poster.jpg",
    loop: "video/loops/fruta-puta-nightstand.mp4",
    description: [], // TODO
    media: [],
  },
];

/* Contact details used across the site */
window.FP_CONTACT = {
  email: "niv.ginat@gmail.com",
  instagram: "https://www.instagram.com/vivafrutaputa/",
  // footer socials, in this order. Add TikTok / Pinterest here once the accounts exist.
  socials: [
    ["Instagram", "https://www.instagram.com/vivafrutaputa/"],
    ["YouTube", "https://www.youtube.com/@frutaputa"],
    ["Reddit", "https://www.reddit.com/user/vivafrutaputa/"],
    // ["TikTok", "https://www.tiktok.com/@..."],
    // ["Pinterest", "https://www.pinterest.com/..."],
  ],
};
