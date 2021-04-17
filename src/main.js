import MenuView from './view/menu';
import TripInfoView from './view/trip-info';
import FiltersView from './view/filters';
import SortView from './view/sort';
import TotalPriceView from './view/price';
import TripNewView from './view/trip-new';
import TripItemView from './view/trip-item';
import {generatePoints} from './mock/trip-point';
import {renderTemplate, renderElement, RenderPosition} from './utils';

const TRIP_LIST_ITEM_COUNT = 15;
const points = generatePoints(TRIP_LIST_ITEM_COUNT);


const headerMain = document.querySelector('.trip-main');
const pageMain = document.querySelector('.page-main');

// Header trip info
renderElement(headerMain, new TripInfoView(points[0]).getElement(), RenderPosition.BEFOREEND);

// Trip total price
const headerTripInfo = headerMain.querySelector('.trip-main__trip-info');
renderElement(headerTripInfo, new TotalPriceView(points[0]).getElement(), RenderPosition.AFTERBEGIN);

// Header nav
const headerNav = headerMain.querySelector('.trip-controls__navigation');
renderElement(headerNav, new MenuView().getElement(), RenderPosition.BEFOREEND);

// Header filters
const headerFilters = headerMain.querySelector('.trip-controls__filters');
renderElement(headerFilters, new FiltersView().getElement(), RenderPosition.BEFOREEND);

// Content sort
const mainTripEvents = pageMain.querySelector('.trip-events');
renderElement(mainTripEvents, new SortView().getElement(), RenderPosition.BEFOREEND);

// Trip list
const tripList = document.createElement('ul');
tripList.classList.add('trip-events__list');

for (let i = 1; i < points.length; i++) {
  renderElement(tripList, new TripItemView(points[i]).getElement(), RenderPosition.BEFOREEND);
}

mainTripEvents.append(tripList);

// New trip
renderElement(tripList, new TripNewView(points[0]).getElement(), RenderPosition.BEFOREEND);

