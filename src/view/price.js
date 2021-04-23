import AbstractView from './abstract';

const createTotalPriceTemplate = (event) => {
  const {basePrice} = event;
  return `<p class="trip-info__cost">
              Total: &euro;&nbsp;<span class="trip-info__cost-value">${basePrice}</span>
            </p>`;
};

export default class Price extends AbstractView {
  constructor(event) {
    super();
    this._event = event;
  }

  getTemplate() {
    return createTotalPriceTemplate(this._event);
  }
}
