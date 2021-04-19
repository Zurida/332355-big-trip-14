import {createElement} from '../utils';

const createTotalPriceTemplate = (event) => {
  const {basePrice} = event;
  return `<p class="trip-info__cost">
              Total: &euro;&nbsp;<span class="trip-info__cost-value">${basePrice}</span>
            </p>`;
};

export default class Price {
  constructor(event) {
    this._event = event;
    this._element = null;
  }

  getTemplate() {
    return createTotalPriceTemplate(this._event);
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
