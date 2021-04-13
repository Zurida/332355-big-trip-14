import {CITIES, EVENT_TYPES} from '../constants';
import {dateFrom} from '../utils';

const getRandomValue = (min = 0, max = 5) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const generateOfferType = () => {
  return EVENT_TYPES[getRandomValue(0, EVENT_TYPES.length)];
};

const generateOffers = (offerType) => {
  const offers = [
    {
      type: 'taxi',
      offersList: [
        {name: 'Order Uber', price: '20', type: 'taxi'},
      ],
    },
    {
      type: 'bus',
      offersList: [],
    },
    {
      type: 'train',
      offersList: [],
    },
    {
      type: 'ship',
      offersList: [],
    },
    {
      type: 'transport',
      offersList: [],
    },
    {
      type: 'drive',
      offersList: [
        {name: 'Rent a car', price: '200', type: 'rent-car'},
      ],
    },
    {
      type: 'flight',
      offersList: [
        {name: 'Add luggage', price: '50', type: 'luggage'},
        {name: 'Switch to comfort', price: '80', type: 'comfort'},
        {name: 'Add meal', price: '15', type: 'meal'},
        {name: 'Choose seats', price: '5', type: 'seats'},
        {name: 'Travel by train', price: '40', type: 'travel'},
      ],
    },
    {
      type: 'check-in',
      offersList: [
        {name: 'Add breakfast', price: '50', type: 'breakfast'},
      ],
    },
    {
      type: 'sightseeing',
      offersList: [
        {name: 'Book tickets', price: '40', type: 'bookTickets'},
        {name: 'Lunch in city', price: '30', type: 'lunch'},
      ],
    },
    {
      type: 'restaurant',
      offersList: [],
    },
  ];
  return offers.find(({type}) => type === offerType);
};


const getDestinationPoint = () => {
  const initialText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.';
  const descriptionArray = initialText.split('. ');
  const randomDescription = descriptionArray.splice(getRandomValue(1, 5), getRandomValue(1, 5)).join('. ');
  return {
    name: CITIES[getRandomValue(0, CITIES.length)],
    description: randomDescription,
    pictures: [
      {
        src: `http://picsum.photos/248/152?r=${getRandomValue()}`,
        alt: '',
      },
    ],
  };
};

const generateDateTo = (dateFrom) => {
  const minMinutesGap = 30;
  const maxMinutesGap = 220;
  const minutesGap = getRandomValue(minMinutesGap, maxMinutesGap);
  return dateFrom.add(minutesGap, 'minute');
};

const generateTripPoint = () => {
  const offerType = generateOfferType();
  return {
    id: 0,
    offerType: offerType,
    destinationPoint: getDestinationPoint(),
    offers: generateOffers(offerType),
    dateFrom: dateFrom().toDate(),
    dateTo: generateDateTo(dateFrom()),
    basePrice: getRandomValue(15, 220),
    isFavorite: Boolean(getRandomValue(0,2)),
  };
};

const generatePoints = (points) => {
  const TRIP_LIST_ITEM_COUNT = 15;
  return new Array(TRIP_LIST_ITEM_COUNT).fill().map(points);
};

export {generateTripPoint, generatePoints};
