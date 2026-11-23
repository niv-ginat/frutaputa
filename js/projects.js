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
  soon        true = placeholder page ("coming soon") until media is added
  description paragraphs (one string per paragraph). Empty = nothing shown.
  media       gallery: images (.jpg/.png/.gif) or videos (.mp4)

  Media lives in images/projects/<slug>/ and video/loops/.
  Projects marked TODO still need a description.
*/
window.PROJECTS = [
  {
    slug: "gallery-event",
    title: "Gallery Event",
    year: 2026,
    month: 11,
    place: "Madrid",
    type: "Exhibition",
    cover: "images/projects/gallery-event/cover.jpg",
    loop: "video/loops/gallery-event.mp4",
    description: [], // TODO
    // stills pulled from Social Media/Video/Final Video.mp4 (FP_Gallery_Video.mp4 is a broken export)
    media: [
      "images/projects/gallery-event/cover.jpg",
      "images/projects/gallery-event/still-3.jpg",
      "images/projects/gallery-event/still-5.jpg",
      "images/projects/gallery-event/still-9.jpg",
      "images/projects/gallery-event/still-4.jpg",
      "images/projects/gallery-event/still-6.jpg",
      "images/projects/gallery-event/still-7.jpg",
      "images/projects/gallery-event/still-8.jpg",
    ],
  },
  {
    slug: "pinta-malasana-2026",
    title: "Pinta Malasaña 2026",
    year: 2026,
    month: 6,
    place: "Madrid",
    type: "Mural",
    cover: "images/projects/pinta-malasana-2026/cover.jpg",
    loop: "video/loops/pinta-malasana-2026.mp4",
    description: [], // TODO
    media: [
      "images/projects/pinta-malasana-2026/cover.jpg",
      "images/projects/pinta-malasana-2026/artist.jpg",
      "images/projects/pinta-malasana-2026/detail.jpg",
      "images/projects/pinta-malasana-2026/painting.jpg",
      "images/projects/pinta-malasana-2026/street.jpg",
      "images/projects/pinta-malasana-2026/process.jpg",
      "images/projects/pinta-malasana-2026/crew.jpg",
      "images/projects/pinta-malasana-2026/overhead.jpg",
    ],
  },
  {
    slug: "stickers",
    title: "Stickers",
    year: 2025,
    month: 9,
    place: "Madrid & Paris",
    type: "Stickers",
    cover: "images/projects/stickers/cover.jpg",
    loop: "video/loops/stickers.mp4",
    description: [], // TODO
    // gallery: the sticker, out in the world (Madrid, Paris), then the torn ones
    media: [
      "images/projects/stickers/cover.jpg",
      "images/projects/stickers/yellow.jpg",
      "images/projects/stickers/eiffel.jpg",
      "images/projects/stickers/arc.jpg",
      "images/projects/stickers/spotted.jpg",
      "images/projects/stickers/cans.jpg",
      "images/projects/stickers/torn-1.jpg",
      "images/projects/stickers/torn-2.jpg",
    ],
  },
  {
    slug: "sao-paulo-mural",
    title: "Gal",
    year: 2025,
    month: 9,
    place: "São Paulo",
    type: "Mural",
    client: "Bar do Biu",
    cover: "images/projects/sao-paulo-mural/cover.jpg",
    loop: "video/loops/sao-paulo-mural.mp4",
    description: [], // TODO
    media: [
      "images/projects/sao-paulo-mural/cover.jpg",
      "images/projects/sao-paulo-mural/detail-1.jpg",
      "images/projects/sao-paulo-mural/detail-2.jpg",
      "images/projects/sao-paulo-mural/artist-1.jpg",
      "images/projects/sao-paulo-mural/detail-3.jpg",
      "images/projects/sao-paulo-mural/detail-4.jpg",
      "images/projects/sao-paulo-mural/artist-4.jpg",
      "images/projects/sao-paulo-mural/detail-5.jpg",
      "images/projects/sao-paulo-mural/artist-2.jpg",
      "images/projects/sao-paulo-mural/detail-6.jpg",
      "images/projects/sao-paulo-mural/artist-5.jpg",
      "images/projects/sao-paulo-mural/reference.jpg",
      "images/projects/sao-paulo-mural/artist-3.jpg",
      "images/projects/sao-paulo-mural/artist-6.jpg",
    ],
  },
  {
    slug: "pinta-malasana",
    title: "Pinta Malasaña",
    year: 2025,
    month: 6,
    place: "Madrid",
    type: "Mural",
    client: "Pinta Malasaña festival",
    cover: "images/projects/pinta-malasana/cover.jpg",
    description: [], // TODO
    media: [
      "images/projects/pinta-malasana/cover.jpg",
      "images/projects/pinta-malasana/before.jpg",
      "images/projects/pinta-malasana/process-1.jpg",
      "images/projects/pinta-malasana/process-2.jpg",
      "images/projects/pinta-malasana/process-3.jpg",
      "images/projects/pinta-malasana/process-4.jpg",
      "images/projects/pinta-malasana/process-5.jpg",
      "images/projects/pinta-malasana/door-1.jpg",
      "images/projects/pinta-malasana/door-2.jpg",
      "images/projects/pinta-malasana/detail.jpg",
    ],
  },
  {
    slug: "shiela",
    title: "Shiela",
    year: 2025,
    month: 6,
    place: "Madrid",
    type: "Tiles",
    cover: "images/projects/shiela/cover.jpg",
    loop: "video/loops/shiela.mp4",
    description: [], // TODO
    // gallery follows the Instagram post: the piece, installed, smashed, the VIVA fragment, then the artists
    media: [
      "images/projects/shiela/cover.jpg",
      "images/projects/shiela/installed.jpg",
      "images/projects/shiela/broken-1.jpg",
      "images/projects/shiela/broken-2.jpg",
      "images/projects/shiela/broken-3.jpg",
      "images/projects/shiela/viva.jpg",
      "images/projects/shiela/artists.jpg",
    ],
  },
  {
    slug: "alimentacion-screen-print",
    title: "Sleeping Women Screen Print",
    year: 2025,
    month: 6,
    place: "Madrid",
    type: "Screen print",
    cover: "images/projects/alimentacion-screen-print/cover.jpg",
    loop: "video/loops/alimentacion-screen-print.mp4",
    description: [], // TODO
    // gallery follows the Instagram posts: artist with the print at the mural, framed print, print in front of the mural, details
    media: [
      "images/projects/alimentacion-screen-print/artist.jpg",
      "images/projects/alimentacion-screen-print/framed.jpg",
      "images/projects/alimentacion-screen-print/cover.jpg",
      "images/projects/alimentacion-screen-print/detail.jpg",
      "images/projects/alimentacion-screen-print/stack.jpg",
    ],
  },
  {
    slug: "alimentacion-mural",
    title: "Sleeping Women",
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
    slug: "tantas",
    title: "Tantas Papayas",
    year: 2025,
    place: "", // TODO: city
    type: "Screen print",
    cover: "images/projects/tantas/print-11.jpg",
    loop: "video/loops/tantas.mp4",
    description: [], // TODO
    media: [
      "images/projects/tantas/print-11.jpg",
      "images/projects/tantas/print-9.jpg",
      "images/projects/tantas/print-10.jpg",
      "images/projects/tantas/detail-7.jpg",
      "images/projects/tantas/detail-8.jpg",
      "images/projects/tantas/detail-1.jpg",
      "images/projects/tantas/detail-2.jpg",
      "images/projects/tantas/detail-3.jpg",
      "images/projects/tantas/detail-4.jpg",
      "images/projects/tantas/detail-5.jpg",
      "images/projects/tantas/detail-6.jpg",
    ],
  },
  {
    slug: "the-dollies",
    title: "The Dollies",
    year: 2025,
    month: 11,
    place: "", // TODO: city
    type: "Mural",
    cover: "images/projects/the-dollies/cover.jpg",
    loop: "video/loops/the-dollies.mp4",
    description: [], // TODO
    media: [
      "images/projects/the-dollies/wall.jpg",
      "images/projects/the-dollies/dolly-1.jpg",
      "images/projects/the-dollies/dolly-2.jpg",
      "images/projects/the-dollies/dolly-3.jpg",
      "images/projects/the-dollies/dolly-4.jpg",
      "images/projects/the-dollies/angle-1.jpg",
      "images/projects/the-dollies/angle-2.jpg",
      "images/projects/the-dollies/artist-1.jpg",
      "images/projects/the-dollies/artist-2.jpg",
      "images/projects/the-dollies/signature.jpg",
    ],
  },
  {
    slug: "belen-fernandez",
    title: "Belén Fernández",
    year: 2024,
    month: 8,
    place: "Madrid",
    type: "Street animation",
    cover: "images/projects/belen-fernandez/cover.jpg",
    loop: "video/loops/belen-fernandez.mp4",
    // 95 papaya stickers, one frame each of Belén Fernández dancing (Martinete), pasted around Madrid and shot as a stop-motion
    description: [], // TODO
    media: [
      "images/projects/belen-fernandez/wall-95.jpg",
      "images/projects/belen-fernandez/cover.jpg",
      "images/projects/belen-fernandez/frame-09.jpg",
      "images/projects/belen-fernandez/frame-30.jpg",
      "images/projects/belen-fernandez/frame-40.jpg",
      "images/projects/belen-fernandez/frame-44.jpg",
      "images/projects/belen-fernandez/frame-60.jpg",
      "images/projects/belen-fernandez/frame-82.jpg",
      "images/projects/belen-fernandez/frame-95.jpg",
      "images/projects/belen-fernandez/printing.jpg",
      "images/projects/belen-fernandez/papaya.jpg",
    ],
  },
  {
    slug: "san-gines-tiles",
    title: "San Ginés Tiles",
    year: 2024,
    month: 12,
    place: "Madrid",
    type: "Tiles",
    cover: "images/projects/san-gines-tiles/cover.jpg",
    loop: "video/loops/san-gines-tiles.mp4",
    description: [], // TODO
    // gallery: the tile, on the granite, installed, the street, then the bust that inspired it
    media: [
      "images/projects/san-gines-tiles/cover.jpg",
      "images/projects/san-gines-tiles/granite.jpg",
      "images/projects/san-gines-tiles/installed.jpg",
      "images/projects/san-gines-tiles/street.jpg",
      "images/projects/san-gines-tiles/bust.jpg",
    ],
  },
  {
    slug: "belen-lopez-mural",
    title: "Belén López Mural",
    year: 2024,
    place: "Los Angeles",
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
    loop: "video/loops/eleanor-tiles.mp4",
    description: [], // TODO
    media: [
      "images/projects/eleanor-tiles/cover.jpg",
      "images/projects/eleanor-tiles/post-1.jpg",
      "images/projects/eleanor-tiles/post-2.jpg",
      "images/projects/eleanor-tiles/post-3.jpg",
      "images/projects/eleanor-tiles/post-4.jpg",
      "images/projects/eleanor-tiles/detail.jpg",
    ],
  },
  {
    slug: "a-namoradeira",
    title: "A Namoradeira",
    year: 2024,
    place: "Madrid",
    type: "Tiles",
    cover: "images/projects/a-namoradeira/overhead.jpg",
    loop: "video/loops/a-namoradeira.mp4",
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
    slug: "tikva-in-rotation",
    title: "Tikva in Rotation",
    year: 2023,
    month: 3,
    place: "",
    type: "Tiles · Stop-motion",
    cover: "images/projects/tikva-in-rotation/cover.jpg",
    loop: "video/loops/tikva-in-rotation.mp4",
    description: [], // TODO
    media: [
      "images/projects/tikva-in-rotation/cover.jpg",
      "images/projects/tikva-in-rotation/assembling.jpg",
      "images/projects/tikva-in-rotation/rotation.jpg",
      "images/projects/tikva-in-rotation/blank.jpg",
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
    title: "Beloved",
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
    cover: "images/projects/fruta-puta-nightstand/table.jpg",
    loop: "video/loops/fruta-puta-nightstand.mp4",
    description: [], // TODO
    media: [
      "images/projects/fruta-puta-nightstand/table.jpg",
      "images/projects/fruta-puta-nightstand/top.jpg",
    ],
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
