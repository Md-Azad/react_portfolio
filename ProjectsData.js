const data = [
  {
    id: 1,
    cover: "car_services.jpg",
    title: "Car Service",
    live: "https://car-service-liard.vercel.app",
    github: "https://github.com/Md-Azad/car-service",
    description:
      "Car service is a Full-Stack website with features like login, booking services, Authendication, and add to cart.",
  },
  {
    id: 2,
    cover: "erestaurant.jpg",
    title: "E-restaurant",
    live: "https://e-restaurant-frontend.vercel.app",
    github: "https://github.com/Md-Azad/e-restaurant-frontend",
    description:
      "Noah Baumbach's incisive and compassionate look at a marriage breaking up and a family staying together.Noah Baumbach's incisive and compassionate look at a marriage breaking up and a family staying together.",
  },
  {
    id: 3,
    cover: "book.png",
    title: "Book Finder",
    live: "https://book-finder-chi.vercel.app",
    github: "https://github.com/Md-Azad/Book-finder",
    description:
      "Noah Baumbach's incisive and compassionate look at a marriage breaking up and a family staying together.Noah Baumbach's incisive and compassionate look at a marriage breaking up and a family staying together.",
  },
];

function getAllProjects() {
  return data;
}

export { getAllProjects };
