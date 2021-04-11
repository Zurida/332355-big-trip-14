import dayjs from 'dayjs';

const createInfoTemplate = (event) => {
  const {destination_point, date_from, date_to} = event;

  const generateDate = () => {
    const startDateFormatted = dayjs(date_from).format('MMM DD');
    const dateFormats = {
      1: `${startDateFormatted} - ${dayjs(date_to).format('DD')}`,
      2: `${startDateFormatted}`,
      3: `${startDateFormatted} - ${dayjs(date_to).format('MMM DD')}`,
    };
    if (dayjs(date_from).get('day') === dayjs(date_to).get('day') && dayjs(date_from).get('month') === dayjs(date_to).get('month')) {
      return dateFormats[2];
    }
    if (dayjs(date_from).get('month') === dayjs(date_to).get('month')) {
      return dateFormats[1];
    }
    return dateFormats[3];
  };

  return `<section class="trip-main__trip-info  trip-info">
            <div class="trip-info__main">
              <h1 class="trip-info__tit le">${destination_point.name}</h1>

              <p class="trip-info__dates">${generateDate()}</p>
            </div>
          </section>`;
};

export {createInfoTemplate};
