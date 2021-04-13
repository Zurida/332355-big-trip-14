import {formatDuration} from '../utils';

const createInfoTemplate = (event) => {
  const {destinationPoint, dateFrom, dateTo} = event;

  const generateDate = () => {
    return formatDuration(dateFrom, dateTo);
  };

  return `<section class="trip-main__trip-info  trip-info">
            <div class="trip-info__main">
              <h1 class="trip-info__tit le">${destinationPoint.name}</h1>

              <p class="trip-info__dates">${generateDate()}</p>
            </div>
          </section>`;
};

export {createInfoTemplate};
