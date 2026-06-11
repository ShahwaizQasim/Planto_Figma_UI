import { images } from "./images"

export const navLinks = [
    { id: 1, name: 'Home', href: '/' },
    { id: 2, name: 'Plan Type', href: '/plan-type' },
    { id: 3, name: 'More', href: '/more' },
    { id: 4, name: 'Contact', href: '/contact' }
]

export const NavRightImages = [
    {
        id:1,
        src: images.searchIcon,
    },
    {
        id:2,
        src: images.bagIcon,
    },
    {
        id:3,
        src: images.navIcon,
    }
]

export const TrendyHousePlant = [
  {
    "id": 1,
    "title": "Trendy House Plant",
    "name": "Calathea plant",
    "image": images.plantImage,
    "price": null,
    "buttonText": "Buy Now",
    "category": "House Plant",
    "description": "Beautiful patterned Calathea houseplant in a speckled ceramic pot."
  }
]
export const OurTrendyPlants = [
  {
    "id": 1,
    "title": "For Small Decs Ai Plat",
    "name": "Peace Lily Plant",
    "price": 599,
    "currency": "Rs",
    "image": images.RosePlant,
    "buttonText": "Explore",
    "category": "House Plant",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    "id": 2,
    "title": "For Fresh Decs Ai Plat",
    "name": "Haworthia Succulent",
    "price": 579,
    "currency": "Rs",
    "image": images.RoseGoldPlant,
    "buttonText": "Explore",
    "category": "Succulent",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
]