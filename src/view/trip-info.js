import {createElement, formatDuration} from '../utils';

const createInfoTemplate = (event) => {
  const {destinationPoint, dateFrom, dateTo} = event;

  return `<section class="trip-main__trip-info  trip-info">
            <div class="trip-info__main">
              <h1 class="trip-info__tit le">${destinationPoint.name}</h1>

              <p class="trip-info__dates">${formatDuration(dateFrom, dateTo)}</p>
            </div>
          </section>`;
};


export default class TripInfo {
  constructor(event) {
    this._event = event;
    this._element = null;
  }

  getTemplate() {
    return createInfoTemplate(this._event);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }
  removeElement() {
    this._element = null;
  }
}

