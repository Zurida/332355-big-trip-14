import dayjs from 'dayjs';

const getRandomValue = (min = 0, max = 5) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const generateOfferType = () => {
  const offerTypes = ['taxi', 'bus', 'train', 'ship', 'transport', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];
  return offerTypes[getRandomValue(0, offerTypes.length)];
};

const generateOffers = (offerType) => {
  const offers = [
    {
      type: 'taxi',
      offers: [
        {name: 'Order Uber', price: '20'},
      ],
    },
    {
      type: 'bus',
      offers: [],
    },
    {
      type: 'train',
      offers: [],
    },
    {
      type: 'ship',
      offers: [],
    },
    {
      type: 'transport',
      offers: [],
    },
    {
      type: 'drive',
      offers: [
        {name: 'Rent a car', price: '200'},
      ],
    },
    {
      type: 'flight',
      offers: [
        {name: 'Add luggage', price: '50'},
        {name: 'Switch to comfort', price: '80'},
        {name: 'Add meal', price: '15'},
        {name: 'Choose seats', price: '5'},
        {name: 'Travel by train', price: '40'},
      ],
    },
    {
      type: 'check-in',
      offers: [
        {name: 'Add breakfast', price: '50'},
      ],
    },
    {
      type: 'sightseeing',
      offers: [
        {name: 'Book tickets', price: '40'},
        {name: 'Lunch in city', price: '30'},
      ],
    },
    {
      type: 'restaurant',
      offers: [],
    },
  ];
  return offers.find((item) => item.type === offerType);
};


const getDestinationPoint = () => {
  const cities = ['Amsterdam', 'Tokyo', 'Singapore', 'New-York', 'Hong Kong', 'Osaka', 'Nara'];
  const initialText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.';
  const descriptionArray = initialText.split('. ');
  const randomDescription = descriptionArray.splice(getRandomValue(1, 5), getRandomValue(1, 5)).join('. ');
  return {
    name: cities[getRandomValue(0, cities.length)],
    description: randomDescription,
    pictures: [
      {src: `http://picsum.photos/248/152?r=${getRandomValue()}`},
    ],
  };
};

const generateTripPoint = () => {
  const offerType = generateOfferType();
  return {
    id: 0,
    type: offerType,
    destination_point: getDestinationPoint(),
    offers: generateOffers(offerType).offers,
    date_from: dayjs().format('HH:mm'),
    date_to: dayjs().add(30, 'minute').format('HH:mm'),
    base_price: '',
    isFavorite: Boolean(getRandomValue(0,2)),
  };
};
console.log(generateTripPoint());

export {generateTripPoint};
