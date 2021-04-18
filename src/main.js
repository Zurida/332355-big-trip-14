import MenuView from './view/menu';
import TripInfoView from './view/trip-info';
import FiltersView from './view/filters';
import SortView from './view/sort';
import TotalPriceView from './view/price';
import TripEditView from './view/trip-edit';
import TripItemView from './view/trip-item';
import {generatePoints} from './mock/trip-point';
import {render, RenderPosition} from './utils';

const TRIP_LIST_ITEM_COUNT = 15;
const points = generatePoints(TRIP_LIST_ITEM_COUNT);


const headerMain = document.querySelector('.trip-main');
const pageMain = document.querySelector('.page-main');

const renderTripPoint = (tripElement, tripPoint) => {
  const tripComponent = new TripItemView(tripPoint);
  const tripEditComponent = new TripEditView(tripPoint);

  const onKeyboardEsc = function (evt) {
    if (evt.key === 'Escape') {
      replaceFormToTripPoint();
    }
  };

  const replaceTripPointToForm = () => {
    tripElement.replaceChild(tripEditComponent.getElement(), tripComponent.getElement());
    document.addEventListener('keydown', onKeyboardEsc);
  };

  const replaceFormToTripPoint= () => {
    tripElement.replaceChild(tripComponent.getElement(), tripEditComponent.getElement());
    document.removeEventListener('keydown', onKeyboardEsc);
  };

  tripComponent.getElement().querySelector('.event__rollup-btn').addEventListener('click', () => {
    replaceTripPointToForm();
  });

  tripEditComponent.getElement().querySelector('.event--edit').addEventListener('submit', (evt) => {
    evt.preventDefault();
    replaceFormToTripPoint();
  });
  tripEditComponent.getElement().querySelector('.event__reset-btn').addEventListener('click', () => {
    replaceFormToTripPoint();
  });

  render(tripElement, tripComponent.getElement(), RenderPosition.BEFOREEND);
};

// Header trip info
render(headerMain, new TripInfoView(points[0]).getElement(), RenderPosition.BEFOREEND);

// Trip total price
const headerTripInfo = headerMain.querySelector('.trip-main__trip-info');
render(headerTripInfo, new TotalPriceView(points[0]).getElement(), RenderPosition.AFTERBEGIN);

// Header nav
const headerNav = headerMain.querySelector('.trip-controls__navigation');
render(headerNav, new MenuView().getElement(), RenderPosition.BEFOREEND);

// Header filters
const headerFilters = headerMain.querySelector('.trip-controls__filters');
render(headerFilters, new FiltersView().getElement(), RenderPosition.BEFOREEND);

// Content sort
const mainTripEvents = pageMain.querySelector('.trip-events');
render(mainTripEvents, new SortView().getElement(), RenderPosition.BEFOREEND);

// Trip list
const tripList = document.createElement('ul');
tripList.classList.add('trip-events__list');

for (let i = 1; i < points.length; i++) {
  renderTripPoint(tripList, points[i]);
}

mainTripEvents.append(tripList);
