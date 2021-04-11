const createTripNewTemplate = (event = {}) => {
  const {
    offer_type = '',
    cities = ['Amsterdam', 'Tokyo', 'Singapore', 'New-York', 'Hong Kong', 'Osaka', 'Nara'],
    event_types = ['taxi', 'bus', 'train', 'ship', 'transport', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'],
    base_price = '',
    destination_point = {
      description: '',
      name: '',
      pictures: [
        {
          src: '',
          alt: '',
        },
      ],
    },
    offers = [],
  } = event;

  const generatePointsDataList = () => {
    if (!cities.length) return '';
    return cities.map((city) => {
      return `<option value="${city}"></option>`;
    });
  };


  const generateEventType = () => {
    if (!event_types.length) return '';
    return event_types.map((event) => {
      return `<div class="event__type-item">
                          <input id="event-type-${event}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${event}">
                          <label class="event__type-label  event__type-label--${event}" for="event-type-${event}-1">${event}</label>
                        </div>`;
    }).join('');
  };


  const generateEventOfferSelector = () => {
    if (!offers.length) return '';
    return offers.map((offer) => {
      return `<div class="event__offer-selector">
                        <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-${offer.name}" checked>
                        <label class="event__offer-label" for="event-offer-luggage-1">
                          <span class="event__offer-title">${offer.name}</span>
                          &plus;&euro;&nbsp;
                          <span class="event__offer-price">30</span>
                        </label>
                      </div>`;
    }).join('');
  };

  const generateDestinationPointImages = () => {
    if (!destination_point.pictures.length) return '';
    return destination_point.pictures.map((picture) => {
      return `<img class="event__photo" src="${picture.src}" alt="${picture.alt}">`;
    }).join('');
  };
  return `<li class="trip-events__item">
              <form class="event event--edit" action="#" method="post">
                <header class="event__header">
                  <div class="event__type-wrapper">
                    <label class="event__type  event__type-btn" for="event-type-toggle-1">
                      <span class="visually-hidden">Choose event type</span>
                      <img class="event__type-icon" width="17" height="17" src="img/icons/${offer_type}.png" alt="Event type icon">
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
                      ${offer_type}
                    </label>
                    <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="" list="destination-list-1">
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
                    <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${base_price}">
                  </div>

                  <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
                  <button class="event__reset-btn" type="reset">Cancel</button>
                </header>
                <section class="event__details">
                  <section class="event__section  event__section--offers">
                    <h3 class="event__section-title  event__section-title--offers">Offers</h3>

                    <div class="event__available-offers">
                    ${generateEventOfferSelector()}
                    </div>
                  </section>

                  <section class="event__section  event__section--destination">
                    <h3 class="event__section-title  event__section-title--destination">Destination</h3>
                    <p class="event__destination-description">${destination_point.description}</p>

                    <div class="event__photos-container">
                      <div class="event__photos-tape">
                      ${generateDestinationPointImages()}
                      </div>
                    </div>
                  </section>
                </section>
              </form>
            </li>`;
};

export {createTripNewTemplate};
