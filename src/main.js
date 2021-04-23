import MenuView from './view/menu';
import TripInfoView from './view/trip-info';
import FiltersView from './view/filters';
import SortView from './view/sort';
import TotalPriceView from './view/price';
import TripEditView from './view/trip-edit';
import TripItemView from './view/trip-item';
import {generatePoints} from './mock/trip-point';
import {render, RenderPosition, replace} from './utils/render';

const TRIP_LIST_ITEM_COUNT = 15;
const points = generatePoints(TRIP_LIST_ITEM_COUNT);


const headerMain = document.querySelector('.trip-main');
const pageMain = document.querySelector('.page-main');

const renderTripPoint = (tripElement, tripPoint) => {
  const tripComponent = new TripItemView(tripPoint);
  const tripEditComponent = new TripEditView(tripPoint);

  const onKeyboardEsc = function (evt) {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      replaceFormToTripPoint();
      document.removeEventListener('keydown', onKeyboardEsc);
    }
  };

  const replaceTripPointToForm = () => {
    replace(tripEditComponent, tripComponent);
    document.addEventListener('keydown', onKeyboardEsc);
  };

  const replaceFormToTripPoint= () => {
    replace(tripComponent, tripEditComponent);
  };

  tripComponent.setEditClickHandler(() => {
    replaceTripPointToForm();
  });

  tripEditComponent.setFormSubmitHandler(() => {
    replaceFormToTripPoint();
  });

  tripEditComponent.setCancelClickHandler(() => {
    replaceFormToTripPoint();
  });

  render(tripElement, tripComponent, RenderPosition.BEFOREEND);
};

// Header trip info
render(headerMain, new TripInfoView(points[0]), RenderPosition.BEFOREEND);

// Trip total price
const headerTripInfo = headerMain.querySelector('.trip-main__trip-info');
render(headerTripInfo, new TotalPriceView(points[0]), RenderPosition.AFTERBEGIN);

// Header nav
const headerNav = headerMain.querySelector('.trip-controls__navigation');
render(headerNav, new MenuView(), RenderPosition.BEFOREEND);

// Header filters
const headerFilters = headerMain.querySelector('.trip-controls__filters');
render(headerFilters, new FiltersView(), RenderPosition.BEFOREEND);

// Content sort
const mainTripEvents = pageMain.querySelector('.trip-events');
render(mainTripEvents, new SortView(), RenderPosition.BEFOREEND);

// Trip list
const tripList = document.createElement('ul');
tripList.classList.add('trip-events__list');

for (let i = 1; i < points.length; i++) {
  renderTripPoint(tripList, points[i]);
}

mainTripEvents.append(tripList);
