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
      offers_list: [
        {name: 'Order Uber', price: '20', type: 'taxi'},
      ],
    },
    {
      type: 'bus',
      offers_list: [],
    },
    {
      type: 'train',
      offers_list: [],
    },
    {
      type: 'ship',
      offers_list: [],
    },
    {
      type: 'transport',
      offers_list: [],
    },
    {
      type: 'drive',
      offers_list: [
        {name: 'Rent a car', price: '200', type: 'rent-car'},
      ],
    },
    {
      type: 'flight',
      offers_list: [
        {name: 'Add luggage', price: '50', type: 'luggage'},
        {name: 'Switch to comfort', price: '80', type: 'comfort'},
        {name: 'Add meal', price: '15', type: 'meal'},
        {name: 'Choose seats', price: '5', type: 'seats'},
        {name: 'Travel by train', price: '40', type: 'travel'},
      ],
    },
    {
      type: 'check-in',
      offers_list: [
        {name: 'Add breakfast', price: '50', type: 'breakfast'},
      ],
    },
    {
      type: 'sightseeing',
      offers_list: [
        {name: 'Book tickets', price: '40', type: 'bookTickets'},
        {name: 'Lunch in city', price: '30', type: 'lunch'},
      ],
    },
    {
      type: 'restaurant',
      offers_list: [],
    },
  ];
  return offers.find(({type}) => type === offerType);
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
      {
        src: `http://picsum.photos/248/152?r=${getRandomValue()}`,
        alt: '',
      },
    ],
  };
};

const generateDateTo = () => {
  const minMinutesGap = 30;
  const maxMinutesGap = 220;
  const minutesGap = getRandomValue(minMinutesGap, maxMinutesGap);
  return dayjs().add(minutesGap, 'minute').toDate();
};

const generateTripPoint = () => {
  const offerType = generateOfferType();
  return {
    id: 0,
    offer_type: offerType,
    destination_point: getDestinationPoint(),
    offers: generateOffers(offerType),
    date_from: dayjs().toDate(),
    date_to: generateDateTo(),
    base_price: getRandomValue(15, 220),
    isFavorite: Boolean(getRandomValue(0,2)),
  };
};
console.log(generateTripPoint());

export {generateTripPoint};
