import {createMenuTemplate} from './view/menu';
import {createInfoTemplate} from './view/trip-info';
import {createFiltersTemplate} from './view/filters';
import {createSortTemplate} from './view/sort';
import {createTotalPriceTemplate} from './view/price';
import {createTripNewTemplate} from './view/trip-new';
import {createTripListItemTemplate} from './view/trip-item';
import {generateTripPoint, generatePoints} from './mock/trip-point';

const points = generatePoints(generateTripPoint);

const render = (container, template, position) => {
  container.insertAdjacentHTML(position, template);
};

const headerMain = document.querySelector('.trip-main');
const pageMain = document.querySelector('.page-main');
const headerControls = document.querySelector('.trip-main__trip-controls');

// Header trip info
render(headerControls, createInfoTemplate(points[0]), 'beforeBegin');

// Trip total price
const headerTripInfo = headerMain.querySelector('.trip-main__trip-info');
render(headerTripInfo, createTotalPriceTemplate(points[0]), 'beforeEnd');

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

for (let i = 1; i < points.length; i++) {
  render(tripList, createTripListItemTemplate(points[i]), 'beforeEnd');
}

mainTripEvents.append(tripList);

// New trip
render(tripList, createTripNewTemplate(points[0]), 'afterBegin');

