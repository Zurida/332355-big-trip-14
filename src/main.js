import {createMenuTemplate} from './view/menu';
import {createInfoTemplate} from './view/trip-info';
import {createFiltersTemplate} from './view/filters';
import {createSortTemplate} from './view/sort';
import {createTotalPriceTemplate} from './view/price';
import {createTripNewTemplate} from './view/trip-new';
import {createTripListItemTemplate} from './view/trip-item';
import {createTripEditTemplate} from './view/trip-edit';
import {generateTripPoint} from './mock/trip-point';

const DESTINATION_POINTS_COUNT = 15;
const TRIP_LIST_ITEM_COUNT = 3;

const destinationPoints = new Array(DESTINATION_POINTS_COUNT).fill().map(generateTripPoint);

const render = (container, template, position) => {
  container.insertAdjacentHTML(position, template);
};

const headerMain = document.querySelector('.trip-main');
const pageMain = document.querySelector('.page-main');
const headerControls = document.querySelector('.trip-main__trip-controls');

// Header trip info
render(headerControls, createInfoTemplate(), 'beforeBegin');

// Trip total price
const headerTripInfo = headerMain.querySelector('.trip-main__trip-info');
render(headerTripInfo, createTotalPriceTemplate(), 'beforeEnd');

// Header nav
const headerNav = headerMain.querySelector('.trip-controls__navigation');
render(headerNav, createMenuTemplate(), 'beforeEnd');

// Header filters
const headerFilters = headerMain.querySelector('.trip-controls__filters');
render(headerFilters, createFiltersTemplate(), 'beforeEnd');

// Content sort
const mainTripEvents = pageMain.querySelector('.trip-events');
render(mainTripEvents, createSortTemplate(), 'beforeEnd');

// Trip list
const tripList = document.createElement('ul');
tripList.classList.add('trip-events__list');

for (let i = 0; i < TRIP_LIST_ITEM_COUNT; i++) {
  render(tripList, createTripListItemTemplate(), 'beforeEnd');
}

mainTripEvents.append(tripList);

// New trip
render(tripList, createTripNewTemplate(), 'afterBegin');

// Edit trip
render(tripList, createTripEditTemplate(), 'afterBegin');

