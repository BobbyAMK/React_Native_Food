import {icons, images} from '../navigator';

const affordable = ['4.99', '6.99', '9.99'];
const fairPrice = ['10.99', '12.99', '14.99'];
const expensive = ['19.99', '24.99', '29.99'];
const status = ['Order Delivered', 'Order Cancel'];

const restaurantData = [
  {
    id: 1,
    name: 'Royale With Cheese',
    rating: 4.9,
    categories: [5, 7],
    priceRating: affordable[2],
    photo: images.burger_restaurant_1,
    duration: '30 - 45 min',
    courier: {
      avatar: images.avatar_1,
      name: 'Amy',
    },
    menu: [
      {
        menuId: 1,
        name: 'Crispy Chicken Burger',
        photo: images.crispy_chicken_burger,
        description: 'Burger with crispy chicken, cheese and lettuce',
        calories: 200,
      },
      {
        menuId: 2,
        name: 'Crispy Chicken Burger with Honey Mustard',
        photo: images.honey_mustard_chicken_burger,
        description: 'Crispy Chicken Burger with Honey Mustard Coleslaw',
        calories: 250,
      },
      {
        menuId: 3,
        name: 'Crispy Baked French Fries',
        photo: images.baked_fries,
        description: 'Crispy Baked French Fries',
        calories: 194,
      },
    ],
  },
  {
    id: 2,
    name: 'New York-Style Pizza',
    rating: 4.4,
    categories: [6],
    priceRating: expensive[2],
    photo: images.pizza_restaurant,
    duration: '15 - 20 min',
    courier: {
      avatar: images.avatar_2,
      name: 'Jackson',
    },
    menu: [
      {
        menuId: 4,
        name: 'Hawaiian Pizza',
        photo: images.hawaiian_pizza,
        description: 'Canadian bacon, homemade pizza crust, pizza sauce',
        calories: 250,
      },
      {
        menuId: 5,
        name: 'Tomato & Basil Pizza',
        photo: images.pizza,
        description:
          'Fresh tomatoes, aromatic basil pesto and melted bocconcini',
        calories: 250,
      },
      {
        menuId: 6,
        name: 'Tomato Pasta',
        photo: images.tomato_pasta,
        description: 'Pasta with fresh tomatoes',
        calories: 100,
      },
      {
        menuId: 7,
        name: 'Mediterranean Chopped Salad ',
        photo: images.salad,
        description: 'Finely chopped lettuce, tomatoes, cucumbers',
        calories: 100,
      },
    ],
  },
  {
    id: 3,
    name: 'Germany Hotdogs',
    rating: 4.4,
    categories: [3],
    priceRating: fairPrice[1],

    photo: images.hot_dog_restaurant,
    duration: '20 - 25 min',
    courier: {
      avatar: images.avatar_3,
      name: 'James',
    },
    menu: [
      {
        menuId: 8,
        name: 'Chicago Style Hot Dog',
        photo: images.chicago_hot_dog,
        description: 'Fresh tomatoes, all beef hot dogs',
        calories: 100,
      },
    ],
  },
  {
    id: 4,
    name: 'Sushi',
    rating: 4.8,
    categories: [8],
    priceRating: expensive[1],

    photo: images.japanese_restaurant,
    duration: '10 - 15 min',
    courier: {
      avatar: images.avatar_4,
      name: 'Ahmad',
    },
    menu: [
      {
        menuId: 9,
        name: 'Sushi sets',
        photo: images.sushi,
        description: 'Fresh salmon, sushi rice, fresh juicy avocado',
        calories: 100,
      },
    ],
  },
  {
    id: 5,
    name: 'Cuisine',
    rating: 4.5,
    categories: [1, 2],
    priceRating: affordable[1],

    photo: images.noodle_shop,
    duration: '15 - 20 min',
    courier: {
      avatar: images.avatar_4,
      name: 'Muthu',
    },
    menu: [
      {
        menuId: 10,
        name: 'Kolo Mee',
        photo: images.kolo_mee,
        description: 'Noodles with char siu',
        calories: 200,
      },
      {
        menuId: 11,
        name: 'Sarawak Laksa',
        photo: images.sarawak_laksa,
        description: 'Vermicelli noodles, cooked prawns',
        calories: 300,
      },
      {
        menuId: 12,
        name: 'Nasi Lemak',
        photo: images.nasi_lemak,
        description: 'A traditional Malay rice dish',
        calories: 300,
      },
      {
        menuId: 13,
        name: 'Nasi Briyani with Mutton',
        photo: images.nasi_briyani_mutton,
        description: 'A traditional Indian rice dish with mutton',
        calories: 300,
      },
    ],
  },
  {
    id: 6,
    name: 'Dessets',
    rating: 4.9,
    categories: [9, 10],
    priceRating: affordable[0],
    photo: images.kek_lapis_shop,
    duration: '35 - 40 min',
    courier: {
      avatar: images.avatar_1,
      name: 'Jessie',
    },
    menu: [
      {
        menuId: 12,
        name: 'Teh C Peng',
        photo: images.teh_c_peng,
        description: 'Three Layer Teh C Peng',
        calories: 100,
      },
      {
        menuId: 13,
        name: 'ABC Ice Kacang',
        photo: images.ice_kacang,
        description: 'Shaved Ice with red beans',
        calories: 100,
      },
      {
        menuId: 14,
        name: 'Kek Lapis',
        photo: images.kek_lapis,
        description: 'Layer cakes',
        calories: 300,
      },
    ],
  },
];

const categoryData = [
  {
    id: 1,
    name: 'Rice',
    icon: icons.rice,
  },
  {
    id: 2,
    name: 'Noodles',
    icon: icons.noodle,
  },
  {
    id: 3,
    name: 'HotDog',
    icon: icons.hotdog,
  },
  {
    id: 4,
    name: 'Salads',
    icon: icons.salad,
  },
  {
    id: 5,
    name: 'Burgers',
    icon: icons.hamburger,
  },
  {
    id: 6,
    name: 'Pizza',
    icon: icons.pizza,
  },
  {
    id: 7,
    name: 'Fries',
    icon: icons.fries,
  },
  {
    id: 8,
    name: 'Sushi',
    icon: icons.sushi,
  },
  {
    id: 9,
    name: 'Donut',
    icon: icons.donut,
  },
  {
    id: 10,
    name: 'Drinks',
    icon: icons.drink,
  },
];

const listingHint = [
  {
    id: 1,
    name: 'Featured',
  },
  {
    id: 2,
    name: 'Nearby',
  },
  {
    id: 3,
    name: 'Popular',
  },
  {
    id: 4,
    name: 'Newest',
  },
  {
    id: 5,
    name: 'Trending',
  },
];
const orderListing = [
  {
    id: 1,
    orderName: 'Pizza Hut',
    orderStatus: status[0],
    price: expensive[3],
    time: '2:30',
    date: '29 Nov',
  },
  {
    id: 2,
    orderName: 'KFC',
    orderStatus: status[0],
    price: fairPrice[1],
    time: '2:34',
    date: '29 Nov',
  },
  {
    id: 3,
    orderName: "Domino's Pizza",
    orderStatus: status[1],
    price: fairPrice[2],
    time: '2:45',
    date: '29 Nov',
  },
  {
    id: 4,
    orderName: 'Starbucks',
    orderStatus: status[0],
    price: fairPrice[1],
    time: '5:40',
    date: '27 Nov',
  },
  {
    id: 5,
    orderName: 'McDonald',
    orderStatus: status[1],
    price: affordable[0],
    time: '19:01',
    date: '27 Nov',
  },
  {
    id: 2,
    orderName: 'BurgerKing',
    orderStatus: status[1],
    price: fairPrice[2],
    time: '2:00',
    date: '25 Nov',
  },
];

export default {
  restaurantData,
  categoryData,
  listingHint,
  affordable,
  fairPrice,
  expensive,
  orderListing,
  status,
};
