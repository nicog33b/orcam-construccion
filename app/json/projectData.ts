export const projectsData = [
  {
    id: 1,
    title: "Proyecto 1",
    location: "Uruguay",
    year: 2024,
    type: "Obra Nueva",
    images: [
      "/proyectos/1/IMG_20240125_130814.jpg",
      "/proyectos/1/IMG_20240126_154800.jpg",
      "/proyectos/1/IMG-20231230-WA0050.jpg",
      "/proyectos/1/IMG-20240111-WA0029.jpg",
    ],
  },
  {
    id: 2,
    title: "Proyecto 2",
    location: "Uruguay",
    year: 2012,
    type: "Reforma",
    images: [
      "/proyectos/2/2012-11-23 19.24.18.jpg",
      "/proyectos/2/2012-11-24 14.47.51.jpg",
      "/proyectos/2/2012-11-24 16.03.05.jpg",
      "/proyectos/2/2012-11-25 16.53.41.jpg",
    ],
  },
  {
    id: 3,
    title: "Proyecto 3",
    location: "Uruguay",
    year: 2013,
    type: "Obra Nueva",
    images: [
      "/proyectos/3/2013-01-03 09.45.12.jpg",
      "/proyectos/3/2013-01-03 11.45.28.jpg",
      "/proyectos/3/2013-01-04 19.18.22.jpg",
      "/proyectos/3/2013-01-04 19.20.21.jpg",
    ],
  },
  {
    id: 4,
    title: "Proyecto 4",
    location: "Uruguay",
    year: 2023,
    type: "Reciclaje",
    images: [
      "/proyectos/4/IMG_20230817_122238.jpg",
      "/proyectos/4/IMG_20230817_122316.jpg",
      "/proyectos/4/IMG_20230928_152134.jpg",
      "/proyectos/4/IMG_20231012_112241.jpg",
    ],
  },
]

export type Project = (typeof projectsData)[0]
