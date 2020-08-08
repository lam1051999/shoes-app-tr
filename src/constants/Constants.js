import {Dimensions} from 'react-native';

//common constants
export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;
//home screen constants
export const CARD_WIDTH = SCREEN_WIDTH * 0.56;
export const CARD_HEIGHT = SCREEN_HEIGHT * 0.375;
export const ITEM_IMAGE_WIDTH = CARD_WIDTH;
export const ITEM_IMAGE_HEIGHT = ITEM_IMAGE_WIDTH * 0.5;
export const CART_IMAGE_WIDTH = 120;
export const CART_IMAGE_HEIGHT = CART_IMAGE_WIDTH * 0.5;
export const SHOWROM_IMAGE_WIDTH = SCREEN_WIDTH / 4 - 40;
export const SHOWROM_IMAGE_HEIGHT = SHOWROM_IMAGE_WIDTH * 0.5;
export const MORE_ITEM_CONTAINER_HEIGHT = SCREEN_HEIGHT * 0.3;
export const MORE_ITEM_CONTAINER_WIDTH = (SCREEN_WIDTH - 50) / 2;
export const MORE_ITEM_IMAGE_WIDTH = (SCREEN_WIDTH - 100) / 2;
export const MORE_ITEM_IMAGE_HEIGHT = MORE_ITEM_IMAGE_WIDTH * 0.5;
export const CUT_OFF_OPACITY = 0.1;
export const ACTION_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  DECREASE_ITEM: 'DECREASE_ITEM',
  INCREASE_ITEM: 'INCREASE_ITEM',
};
export const CATEGORIES = [
  {id: 1, name: 'Addidas'},
  {id: 2, name: 'Balenciaga'},
  {id: 3, name: 'Converse'},
  {id: 4, name: 'Nike'},
  {id: 5, name: 'Vans'},
];
export const OPTIONS = [
  {id: 1, name: 'New'},
  {id: 2, name: 'Featured'},
  {id: 3, name: 'Upcoming'},
];
export const ITEMS_DATA = {
  Addidas: [
    {
      id: 1,
      unique_id: 0,
      description:
        'In his latest collaboration with adidas, Pharrell Williams strips back the layers to expose the true feeling of luxury: comfort. Using the iconic adidas Adilette slides as a blueprint, he added energy-returning cushioning to this updated version. The padded, adjustable upper takes comfort to the next level.',
      backgroundColor: '#60b276',
      sizes: [6, 7, 7.5, 8, 9, 9.5, 10],
      price: 150,
      name: 'HUMANRACE',
      source: require('../assets/addidas/humanrace-green.png'),
    },
    {
      id: 2,
      unique_id: 1,
      description:
        'In his latest collaboration with adidas, Pharrell Williams strips back the layers to expose the true feeling of luxury: comfort. Using the iconic adidas Adilette slides as a blueprint, he added energy-returning cushioning to this updated version. The padded, adjustable upper takes comfort to the next level.',
      backgroundColor: '#eebfdb',
      sizes: [6, 7, 7.5, 8, 9, 9.5, 10],
      price: 150,
      name: 'HUMANRACE',
      source: require('../assets/addidas/humanrace-pink.png'),
    },
    {
      id: 3,
      unique_id: 2,
      description:
        'In his latest collaboration with adidas, Pharrell Williams strips back the layers to expose the true feeling of luxury: comfort. Using the iconic adidas Adilette slides as a blueprint, he added energy-returning cushioning to this updated version. The padded, adjustable upper takes comfort to the next level.',
      backgroundColor: '#fc3a3a',
      sizes: [6, 7, 7.5, 8, 9, 9.5, 10],
      price: 150,
      name: 'NMD',
      source: require('../assets/addidas/nmd-color.png'),
    },
    {
      id: 4,
      unique_id: 3,
      description:
        'In his latest collaboration with adidas, Pharrell Williams strips back the layers to expose the true feeling of luxury: comfort. Using the iconic adidas Adilette slides as a blueprint, he added energy-returning cushioning to this updated version. The padded, adjustable upper takes comfort to the next level.',
      backgroundColor: '#838387',
      sizes: [6, 7, 7.5, 8, 9, 9.5, 10],
      price: 150,
      name: 'NMD',
      source: require('../assets/addidas/nmd-grey.png'),
    },
  ],
  Balenciaga: [
    {
      id: 1,
      unique_id: 4,
      description:
        'In his latest collaboration with adidas, Pharrell Williams strips back the layers to expose the true feeling of luxury: comfort. Using the iconic adidas Adilette slides as a blueprint, he added energy-returning cushioning to this updated version. The padded, adjustable upper takes comfort to the next level.',
      backgroundColor: '#424149',
      sizes: [6, 7, 7.5, 8, 9, 9.5, 10],
      price: 120,
      name: 'HIGH-BLACK',
      source: require('../assets/balenciaga/fullblack.png'),
    },
    {
      id: 2,
      unique_id: 5,
      description:
        'In his latest collaboration with adidas, Pharrell Williams strips back the layers to expose the true feeling of luxury: comfort. Using the iconic adidas Adilette slides as a blueprint, he added energy-returning cushioning to this updated version. The padded, adjustable upper takes comfort to the next level.',
      backgroundColor: '#bdbdbd',
      sizes: [6, 7, 7.5, 8, 9, 9.5, 10],
      price: 120,
      name: 'TRIPING_WHITE',
      source: require('../assets/balenciaga/normal-white.png'),
    },
    {
      id: 3,
      unique_id: 6,
      description:
        'In his latest collaboration with adidas, Pharrell Williams strips back the layers to expose the true feeling of luxury: comfort. Using the iconic adidas Adilette slides as a blueprint, he added energy-returning cushioning to this updated version. The padded, adjustable upper takes comfort to the next level.',
      backgroundColor: '#6d6b72',
      sizes: [6, 7, 7.5, 8, 9, 9.5, 10],
      price: 120,
      name: 'TRIPLE-S',
      source: require('../assets/balenciaga/triple-s-black.png'),
    },
    {
      id: 4,
      unique_id: 7,
      description:
        'In his latest collaboration with adidas, Pharrell Williams strips back the layers to expose the true feeling of luxury: comfort. Using the iconic adidas Adilette slides as a blueprint, he added energy-returning cushioning to this updated version. The padded, adjustable upper takes comfort to the next level.',
      backgroundColor: '#B5242B',
      sizes: [6, 7, 7.5, 8, 9, 9.5, 10],
      price: 120,
      name: 'TRIPLE-S',
      source: require('../assets/balenciaga/triple-s-color.png'),
    },
  ],
  Converse: [
    {
      id: 1,
      unique_id: 8,
      description:
        'In his latest collaboration with adidas, Pharrell Williams strips back the layers to expose the true feeling of luxury: comfort. Using the iconic adidas Adilette slides as a blueprint, he added energy-returning cushioning to this updated version. The padded, adjustable upper takes comfort to the next level.',
      backgroundColor: '#A50511',
      sizes: [6, 7, 7.5, 8, 9, 9.5, 10],
      price: 130,
      name: 'CONVERSE-HEART',
      source: require('../assets/converse/converse-heart.png'),
    },
    {
      id: 2,
      unique_id: 9,
      description:
        'In his latest collaboration with adidas, Pharrell Williams strips back the layers to expose the true feeling of luxury: comfort. Using the iconic adidas Adilette slides as a blueprint, he added energy-returning cushioning to this updated version. The padded, adjustable upper takes comfort to the next level.',
      backgroundColor: '#ba3236',
      sizes: [6, 7, 7.5, 8, 9, 9.5, 10],
      price: 130,
      name: 'CONVERSE-RED',
      source: require('../assets/converse/converse-red.png'),
    },
    {
      id: 3,
      unique_id: 10,
      description:
        'In his latest collaboration with adidas, Pharrell Williams strips back the layers to expose the true feeling of luxury: comfort. Using the iconic adidas Adilette slides as a blueprint, he added energy-returning cushioning to this updated version. The padded, adjustable upper takes comfort to the next level.',
      backgroundColor: '#bdbdbd',
      sizes: [6, 7, 7.5, 8, 9, 9.5, 10],
      price: 130,
      name: 'CONVERSE-WHITE',
      source: require('../assets/converse/converse-white.png'),
    },
  ],
  Nike: [
    {
      id: 1,
      unique_id: 11,
      description:
        'In his latest collaboration with adidas, Pharrell Williams strips back the layers to expose the true feeling of luxury: comfort. Using the iconic adidas Adilette slides as a blueprint, he added energy-returning cushioning to this updated version. The padded, adjustable upper takes comfort to the next level.',
      backgroundColor: '#363233',
      sizes: [6, 7, 7.5, 8, 9, 9.5, 10],
      price: 140,
      name: 'NIKE-BLACK',
      source: require('../assets/nike/air-blackgrey.png'),
    },
    {
      id: 2,
      unique_id: 12,
      description:
        'In his latest collaboration with adidas, Pharrell Williams strips back the layers to expose the true feeling of luxury: comfort. Using the iconic adidas Adilette slides as a blueprint, he added energy-returning cushioning to this updated version. The padded, adjustable upper takes comfort to the next level.',
      backgroundColor: '#bdbdbd',
      sizes: [6, 7, 7.5, 8, 9, 9.5, 10],
      price: 140,
      name: 'NIKE-GREY',
      source: require('../assets/nike/air-grey.png'),
    },
    {
      id: 3,
      unique_id: 13,
      description:
        'In his latest collaboration with adidas, Pharrell Williams strips back the layers to expose the true feeling of luxury: comfort. Using the iconic adidas Adilette slides as a blueprint, he added energy-returning cushioning to this updated version. The padded, adjustable upper takes comfort to the next level.',
      backgroundColor: '#FAE8AF',
      sizes: [6, 7, 7.5, 8, 9, 9.5, 10],
      price: 140,
      name: 'NIKE-RAINBOW',
      source: require('../assets/nike/airmax-rainbow.png'),
    },
  ],
  Vans: [
    {
      id: 1,
      unique_id: 14,
      description:
        'In his latest collaboration with adidas, Pharrell Williams strips back the layers to expose the true feeling of luxury: comfort. Using the iconic adidas Adilette slides as a blueprint, he added energy-returning cushioning to this updated version. The padded, adjustable upper takes comfort to the next level.',
      backgroundColor: '#bdbdbd',
      sizes: [6, 7, 7.5, 8, 9, 9.5, 10],
      price: 200,
      name: 'VANS-S36',
      source: require('../assets/vans/vans-36.png'),
    },
    {
      id: 2,
      unique_id: 15,
      description:
        'In his latest collaboration with adidas, Pharrell Williams strips back the layers to expose the true feeling of luxury: comfort. Using the iconic adidas Adilette slides as a blueprint, he added energy-returning cushioning to this updated version. The padded, adjustable upper takes comfort to the next level.',
      backgroundColor: '#e0d9d9',
      sizes: [6, 7, 7.5, 8, 9, 9.5, 10],
      price: 200,
      name: 'VANS-AUTHENTIC',
      source: require('../assets/vans/vans-authen.png'),
    },
    {
      id: 3,
      unique_id: 16,
      description:
        'In his latest collaboration with adidas, Pharrell Williams strips back the layers to expose the true feeling of luxury: comfort. Using the iconic adidas Adilette slides as a blueprint, he added energy-returning cushioning to this updated version. The padded, adjustable upper takes comfort to the next level.',
      backgroundColor: '#E0DBD4',
      sizes: [6, 7, 7.5, 8, 9, 9.5, 10],
      price: 200,
      name: 'VANS-FOG',
      source: require('../assets/vans/vans-fog.png'),
    },
    {
      id: 4,
      unique_id: 17,
      description:
        'In his latest collaboration with adidas, Pharrell Williams strips back the layers to expose the true feeling of luxury: comfort. Using the iconic adidas Adilette slides as a blueprint, he added energy-returning cushioning to this updated version. The padded, adjustable upper takes comfort to the next level.',
      backgroundColor: '#D6D1CD',
      sizes: [6, 7, 7.5, 8, 9, 9.5, 10],
      price: 200,
      name: 'VANS-SLIPON',
      source: require('../assets/vans/vans-slipon.png'),
    },
  ],
};
