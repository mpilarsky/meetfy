import spiritsImage from "../assets/favorite-spirits.png";
import musicImage from "../assets/favorite-music.png";
import chefImage from "../assets/favorite-chef.png";
import modernismImage from "../assets/favorite-modernism.png";
import jazzImage from "../assets/search-jazz.png";
import loftImage from "../assets/search-loft.png";
import rooftopImage from "../assets/search-rooftop.png";

export const initialEvents = [
  {
    id: 1,
    image: spiritsImage,
    tag: "MIXOLOGY",
    title: "Secret Garden Spirits",
    price: "$45",
    date: "OCT 24",
    time: "8:00 PM",
    location: "East Village",
    category: "Mixology",
    description:
      "Discover the art of botanical infusions in a hidden rooftop garden with curated drinks and social atmosphere.",
    organizer: "Julian Vance",
  },
  {
    id: 2,
    image: musicImage,
    tag: "MUSIC",
    title: "Underground Pulse",
    price: "Free",
    date: "OCT 28",
    time: "9:00 PM",
    location: "Brooklyn",
    category: "Music",
    description:
      "A showcase of emerging indie electronic artists in an industrial venue with immersive lighting.",
    organizer: "Meetfy Collective",
  },
  {
    id: 3,
    image: chefImage,
    tag: "DINING",
    title: "The Chef's Table",
    price: "$120",
    date: "NOV 02",
    time: "6:30 PM",
    location: "Chelsea",
    category: "Dining",
    description:
      "An intimate 7-course tasting menu experience focused on seasonal ingredients and fine conversation.",
    organizer: "David Roux",
  },
  {
    id: 4,
    image: modernismImage,
    tag: "ART",
    title: "Modernism & The Soul",
    price: "$25",
    date: "TONIGHT",
    time: "7:00 PM",
    location: "Downtown",
    category: "Art",
    description:
      "Join an exclusive evening tour of the city's newest contemporary collection followed by a rooftop social.",
    organizer: "Julian Vance",
  },
  {
    id: 5,
    image: jazzImage,
    tag: "MUSIC",
    title: "Jazz Sessions",
    price: "$45",
    date: "Fri, Oct 24",
    time: "9:00 PM",
    location: "The Blue Velvet, Manhattan",
    category: "Music",
    description:
      "Experience an intimate evening of classic Bebop and avant-garde jazz with the Elias Quartet.",
    organizer: "Velvet Society",
  },
  {
    id: 6,
    image: loftImage,
    tag: "SOCIAL",
    title: "Loft Jazz & Wine",
    price: "$60",
    date: "Sat, Oct 25",
    time: "7:30 PM",
    location: "Skyline Lofts, Brooklyn",
    category: "Social",
    description:
      "A curated evening pairing organic wines with acoustic jazz sets. Perfect for slow conversations.",
    organizer: "Skyline Hosts",
  },
  {
    id: 7,
    image: rooftopImage,
    tag: "ROOFTOP",
    title: "Sunset Jazz Terrace",
    price: "$35",
    date: "Sun, Oct 26",
    time: "5:00 PM",
    location: "Alta Rooftop, Soho",
    category: "Rooftop",
    description:
      "Witness the New York sunset while local legends play smooth soul-jazz standards.",
    organizer: "Alta Rooftop",
  },
];