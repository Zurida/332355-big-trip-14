import {formatDuration} from '../utils';
import AbstractView from './abstract';

const createInfoTemplate = (event) => {
  const {destinationPoint, dateFrom, dateTo} = event;

  return `<section class="trip-main__trip-info  trip-info">
            <div class="trip-info__main">
              <h1 class="trip-info__tit le">${destinationPoint.name}</h1>

              <p class="trip-info__dates">${formatDuration(dateFrom, dateTo)}</p>
            </div>
          </section>`;
};


export default class TripInfo extends AbstractView{
  constructor(event) {
    super();
    this._event = event;
  }

  getTemplate() {
    return createInfoTemplate(this._event);
  }
}

