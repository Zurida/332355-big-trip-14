const createTotalPriceTemplate = (event) => {
  const {basePrice} = event;
  return `<p class="trip-info__cost">
              Total: &euro;&nbsp;<span class="trip-info__cost-value">${basePrice}</span>
            </p>`;
};

export {createTotalPriceTemplate};
