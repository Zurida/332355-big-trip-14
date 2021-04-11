const createTotalPriceTemplate = (event) => {
  const {base_price} = event;
  return `<p class="trip-info__cost">
              Total: &euro;&nbsp;<span class="trip-info__cost-value">${base_price}</span>
            </p>`;
};

export {createTotalPriceTemplate};
