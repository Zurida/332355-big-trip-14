import {timeFormatted, createElement} from '../utils';

const createTripListItemTemplate = (tripPoint) => {
  const {dateFrom, dateTo, offerType, destinationPoint, basePrice, offers, isFavorite} = tripPoint;

  const time = timeFormatted(dateFrom, dateTo);

  const createOfferTemplate = (offers) => {
    if (!offers.offersList) return;

    return offers.offersList.map(({name, price}) => {
      return `<li class="event__offer">
                    <span class="event__offer-title">${name}</span>
                    &plus;&euro;&nbsp;
                    <span class="event__offer-price">${price}</span>
                  </li>`;
    }).join('');
  };

  const getFavouriteClassName = () => {
    return isFavorite ? 'event__favorite-btn--active' : '';
  };

  return `<li class="trip-events__item">
              <div class="event">
                <time class="event__date" datetime="2019-03-18">${time.currentDate}</time>
                <div class="event__type">
                  <img class="event__type-icon" width="42" height="42" src="img/icons/${offerType}.png" alt="Event type icon">
                </div>
                <h3 class="event__title">${offerType} ${destinationPoint.name}</h3>
                <div class="event__schedule">
                  <p class="event__time">
                    <time class="event__start-time" datetime="${time.dateFromAttribute}">${time.dateFromFormatted}</time>
                    &mdash;
                    <time class="event__end-time" datetime="${time.dateToAttribute}">${time.dateToFormatted}</time>
                  </p>
                  <p class="event__duration">${time.timeDifference}</p>
                </div>
                <p class="event__price">
                  &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
                </p>
                <h4 class="visually-hidden">Offers:</h4>
                <ul class="event__selected-offers">
                    ${createOfferTemplate(offers)}
                </ul>
                <button class="event__favorite-btn ${getFavouriteClassName()}" type="button">
                  <span class="visually-hidden">Add to favorite</span>
                  <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
                    <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
                  </svg>
                </button>
                <button class="event__rollup-btn" type="button">
                  <span class="visually-hidden">Open event</span>
                </button>
              </div>
            </li>`;
};

export default class Filters {
  constructor(tripPoint) {
    this._tripPoint = tripPoint;
    this._element = null;
  }

  getTemplate() {
    return createTripListItemTemplate(this._tripPoint);
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
