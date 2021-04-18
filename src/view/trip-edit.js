import {CITIES, EVENT_TYPES} from '../constants';
import {createElement, createEmptyEvent} from '../utils';

const createTripNewTemplate = (event) => {
  if (!event) {
    event = createEmptyEvent();
  }

  const {offerType, destinationPoint, basePrice, offers} = event;

  const generatePointsDataList = () => {
    if (!CITIES.length) return '';

    return CITIES.map((city) => {
      return `<option value="${city}"></option>`;
    });
  };


  const generateEventType = () => {
    if (!EVENT_TYPES.length) return '';

    return EVENT_TYPES.map((event, index) => {
      return `<div class="event__type-item">
                          <input id="event-type-${event}-${index}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${event}">
                          <label class="event__type-label  event__type-label--${event}" for="event-type-${event}-${index}">${event}</label>
                        </div>`;
    }).join('');
  };


  const generateEventOfferSelector = () => {
    if (!offers.offersList.length) return '';

    const generateOffers = () => {
      return offers.offersList.map((offer, index) => {
        return `<div class="event__offer-selector">
                         <input class="event__offer-checkbox  visually-hidden" id="event-offer-${offer.type}-${index}" type="checkbox" name="event-offer-${offer.type}">
                        <label class="event__offer-label" for="event-offer-${offer.type}-${index}">
                          <span class="event__offer-title">${offer.name}</span>
                          &plus;&euro;&nbsp;
                          <span class="event__offer-price">${offer.price}</span>
                        </label>
                      </div>`;
      }).join('');
    };

    return `<section class="event__section  event__section--offers">
                    <h3 class="event__section-title  event__section-title--offers">Offers</h3>

                    <div class="event__available-offers">
                    ${generateOffers()}
                    </div>
                  </section>`;
  };

  const generateDestinationInfo = () => {
    if (!destinationPoint) return '';
    if (!destinationPoint.pictures.length) return '';

    const generatePictures = () => {
      return destinationPoint.pictures.map((picture) => {
        return `<img class="event__photo" src="${picture.src}" alt="${picture.alt}">`;
      }).join('');
    };

    return `<section class="event__section  event__section--destination">
                    <h3 class="event__section-title  event__section-title--destination">Destination</h3>
                    <p class="event__destination-description">${destinationPoint.description}</p>

                    <div class="event__photos-container">
                      <div class="event__photos-tape">
                      ${generatePictures()}
                      </div>
                    </div>
                  </section>`;
  };

  return `<li class="trip-events__item">
              <form class="event event--edit" action="#" method="post">
                <header class="event__header">
                  <div class="event__type-wrapper">
                    <label class="event__type  event__type-btn" for="event-type-toggle-1">
                      <span class="visually-hidden">Choose event type</span>
                      <img class="event__type-icon" width="17" height="17" src="img/icons/${offerType}.png" alt="Event type icon">
                    </label>
                    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

                    <div class="event__type-list">
                      <fieldset class="event__type-group">
                        <legend class="visually-hidden">Event type</legend>
                        ${generateEventType()}
                      </fieldset>
                    </div>
                  </div>

                  <div class="event__field-group  event__field-group--destination">
                    <label class="event__label  event__type-output" for="event-destination-1">
                      ${offerType}
                    </label>
                    <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${event.destinationPoint.name}" list="destination-list-1">
                    <datalist id="destination-list-1">
                      ${generatePointsDataList()}
                    </datalist>
                  </div>

                  <div class="event__field-group  event__field-group--time">
                    <label class="visually-hidden" for="event-start-time-1">From</label>
                    <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="19/03/19 00:00">
                    &mdash;
                    <label class="visually-hidden" for="event-end-time-1">To</label>
                    <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="19/03/19 00:00">
                  </div>

                  <div class="event__field-group  event__field-group--price">
                    <label class="event__label" for="event-price-1">
                      <span class="visually-hidden">Price</span>
                      &euro;
                    </label>
                    <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${basePrice}">
                  </div>

                  <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
                  <button class="event__reset-btn" type="reset">Cancel</button>
                </header>
                <section class="event__details">
                   ${generateEventOfferSelector()}
                   ${generateDestinationInfo()}
                </section>
              </form>
            </li>`;
};

export default class TripEdit {
  constructor(event = createEmptyEvent()) {
    this._event = event;
    this._element = null;
  }

  getTemplate() {
    return createTripNewTemplate(this._event);
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
