const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "Programming for everyone 01",
    description:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.",
    location: "somerset25 12156",
    data: "2021-05-12",
    image: "images/ahmed-nishaath-T0h7UtRNAQ0-unsplash.jpg",
    isFeatured: true,
  },
  {
    id: "e2",
    title: "Programming for everyone 02",
    description:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.",
    location: "somerset25 12156",
    data: "2021-05-12",
    image: "images/james-harrison-vpOeXr5wmR4-unsplash.jpg",
    isFeatured: true,
  },
  {
    id: "e3",
    title: "Programming for everyone 03",
    description:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.",
    location: "somerset25 12156",
    data: "2021-05-12",
    image: "images/marvin-meyer-SYTO3xs06fU-unsplash.jpg",
    isFeatured: false,
  },
];

export function getFeaturedEvent() {
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
  return DUMMY_EVENTS;
}

export function getFilteredEvent() {
  const { year, month } = dataFilter;
  let filteredEvent = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.data);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });
  return filteredEvent;
}

export function getEventBy(id) {
  return DUMMY_EVENTS.find((event) => event.id === id);
}
