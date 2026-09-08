import chocolate from "@/assets/dish-chocolate.jpg";
import pasta from "@/assets/dish-pasta.jpg";
import risotto from "@/assets/dish-risotto.jpg";
import salmon from "@/assets/dish-salmon.jpg";
import event from "@/assets/event.jpg";
import ingredients from "@/assets/ingredients.jpg";
import diningRoom from "@/assets/interior-dining.jpg";
import privateRoom from "@/assets/interior-private.jpg";
import kitchen from "@/assets/kitchen.jpg";
import chef from "@/assets/chef.jpg";
import hero from "@/assets/hero.jpg";
import wine from "@/assets/wine.jpg";
import burrataCaprese from "@/assets/menu/burrata-caprese.jpg";
import calamari from "@/assets/menu/calamari.jpg";
import bruschetta from "@/assets/menu/bruschetta.jpg";
import tomatoSoup from "@/assets/menu/tomato-soup.jpg";
import caesarSalad from "@/assets/menu/caesar-salad.jpg";
import gardenSalad from "@/assets/menu/garden-salad.jpg";
import grilledChicken from "@/assets/menu/grilled-chicken.jpg";
import paneerSteak from "@/assets/menu/paneer-steak.jpg";
import arrabbiata from "@/assets/menu/arrabbiata.jpg";
import pestoLinguine from "@/assets/menu/pesto-linguine.jpg";
import tiramisu from "@/assets/menu/tiramisu.jpg";
import cheesecake from "@/assets/menu/cheesecake.jpg";
import citrusCooler from "@/assets/menu/citrus-cooler.jpg";
import mojito from "@/assets/menu/mojito.jpg";
import mocktail from "@/assets/menu/mocktail.jpg";
import type { Dish } from "@/components/DishCard";
import type { GalleryImage } from "@/components/GalleryGrid";
import type { MenuEntry } from "@/components/MenuItem";
import type { Testimonial } from "@/components/TestimonialCard";

export const images = {
  hero,
  chef,
  pasta,
  salmon,
  risotto,
  chocolate,
  diningRoom,
  privateRoom,
  kitchen,
  ingredients,
  event,
  wine,
};

export const signatureDishes: Dish[] = [
  {
    name: "Truffle Pasta",
    description: "Handmade tagliolini, black truffle, aged parmesan, brown butter.",
    price: "₹480",
    image: pasta,
  },
  {
    name: "Herb-Crusted Salmon",
    description: "Line-caught salmon, garden herb crust, fennel, citrus beurre blanc.",
    price: "₹720",
    image: salmon,
  },
  {
    name: "Wild Mushroom Risotto",
    description: "Carnaroli rice, forest mushrooms, thyme, aged pecorino.",
    price: "₹540",
    image: risotto,
  },
  {
    name: "Chocolate Noir",
    description: "70% single-origin chocolate, salted caramel, gold leaf.",
    price: "₹380",
    image: chocolate,
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Ananya Rao",
    role: "Guest since 2026",
    quote:
      "Every course arrived with intention. The service was warm without ever being intrusive — easily the finest evening we have had all year.",
    rating: 5,
  },
  {
    name: "Marcus Feld",
    role: "Food critic",
    quote:
      "SAVORA cooks with restraint and confidence. The mushroom risotto alone is worth the reservation.",
    rating: 5,
  },
  {
    name: "Priya Nair",
    role: "Anniversary dinner",
    quote:
      "They remembered our anniversary and quietly made the night unforgettable. The room glows, the food sings.",
    rating: 5,
  },
];

export const menu: { category: string; items: MenuEntry[] }[] = [
  {
    category: "Starters",
    items: [
      {
        name: "Burrata Caprese",
        description: "Creamy burrata, marinated heirloom tomato, basil oil, aged balsamic.",
        price: "₹460",
        veg: true,
        image: burrataCaprese,
      },
      {
        name: "Crispy Calamari",
        description: "Lightly battered calamari, lemon, saffron aioli, sea salt.",
        price: "₹520",
        image: calamari,
      },
      {
        name: "Truffle Bruschetta",
        description: "Toasted sourdough, shaved black truffle, tomato, whipped ricotta.",
        price: "₹420",
        veg: true,
        image: bruschetta,
      },
    ],
  },
  {
    category: "Soups & Salads",
    items: [
      {
        name: "Roasted Tomato Soup",
        description: "Slow-roasted tomato, basil cream, sourdough crumb.",
        price: "₹320",
        veg: true,
        image: tomatoSoup,
      },
      {
        name: "Caesar Salad",
        description: "Baby romaine, shaved parmesan, herb croutons, classic dressing.",
        price: "₹380",
        image: caesarSalad,
      },
      {
        name: "Garden Harvest Salad",
        description: "Seasonal leaves, poached pear, walnut, pomegranate, honey vinaigrette.",
        price: "₹390",
        veg: true,
        image: gardenSalad,
      },
    ],
  },
  {
    category: "Main Course",
    items: [
      {
        name: "Herb-Crusted Salmon",
        description: "Line-caught salmon, garden herb crust, fennel, citrus beurre blanc.",
        price: "₹720",
        image: salmon,
      },
      {
        name: "Grilled Chicken",
        description: "Corn-fed chicken supreme, charred leek, thyme cream, confit garlic.",
        price: "₹640",
        image: grilledChicken,
      },
      {
        name: "Paneer Steak",
        description: "Seared farm paneer, heirloom carrot, herb oil, black garlic.",
        price: "₹590",
        veg: true,
        image: paneerSteak,
      },
      {
        name: "Mushroom Risotto",
        description: "Carnaroli rice, forest mushrooms, thyme, aged pecorino.",
        price: "₹540",
        veg: true,
        image: risotto,
      },
    ],
  },
  {
    category: "Pasta",
    items: [
      {
        name: "Truffle Cream Pasta",
        description: "Handmade tagliolini, black truffle, aged parmesan, brown butter.",
        price: "₹480",
        veg: true,
        image: pasta,
      },
      {
        name: "Arrabbiata Pasta",
        description: "Penne, slow-cooked tomato, chilli, garlic, torn basil.",
        price: "₹420",
        veg: true,
        image: arrabbiata,
      },
      {
        name: "Pesto Linguine",
        description: "Basil pesto, toasted pine nuts, parmesan shavings, olive oil.",
        price: "₹460",
        veg: true,
        image: pestoLinguine,
      },
    ],
  },
  {
    category: "Desserts",
    items: [
      {
        name: "Chocolate Noir",
        description: "70% single-origin chocolate, salted caramel, gold leaf.",
        price: "₹380",
        veg: true,
        image: chocolate,
      },
      {
        name: "Tiramisu",
        description: "Espresso-soaked savoiardi, mascarpone cream, dark cocoa.",
        price: "₹340",
        veg: true,
        image: tiramisu,
      },
      {
        name: "New York Cheesecake",
        description: "Baked vanilla cheesecake, biscuit crust, berry compote.",
        price: "₹360",
        veg: true,
        image: cheesecake,
      },
    ],
  },
  {
    category: "Beverages",
    items: [
      {
        name: "Fresh Citrus Cooler",
        description: "Orange, lime, sparkling water, hand-cut ice, mint.",
        price: "₹220",
        veg: true,
        image: citrusCooler,
      },
      {
        name: "Classic Mojito",
        description: "White rum, muddled mint, lime, cane sugar, soda.",
        price: "₹280",
        veg: true,
        image: mojito,
      },
      {
        name: "Signature Mocktail",
        description: "House berry infusion, citrus, botanicals, edible flower.",
        price: "₹260",
        veg: true,
        image: mocktail,
      },
    ],
  },
];


export const galleryImages: GalleryImage[] = [
  { src: pasta, alt: "Truffle pasta plated on dark ceramic", category: "Food" },
  { src: diningRoom, alt: "Candlelit SAVORA dining room", category: "Interior" },
  { src: chef, alt: "Chef plating in the open kitchen", category: "Chef" },
  { src: event, alt: "Celebration dinner with champagne toast", category: "Events" },
  { src: salmon, alt: "Herb-crusted salmon with microgreens", category: "Food" },
  { src: privateRoom, alt: "Private dining room with chandelier", category: "Interior" },
  { src: kitchen, alt: "Chefs at work on the kitchen pass", category: "Chef" },
  { src: chocolate, alt: "Chocolate Noir dessert with gold leaf", category: "Food" },
  { src: wine, alt: "Sommelier pouring red wine", category: "Events" },
  { src: risotto, alt: "Wild mushroom risotto in a gold-rimmed bowl", category: "Food" },
  { src: hero, alt: "SAVORA dining room at night", category: "Interior" },
  { src: ingredients, alt: "Fresh seasonal produce on dark stone", category: "Chef" },
];
