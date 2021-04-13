import dayjs from 'dayjs';

const dateFrom = () => {
  return dayjs();
};

const formatDuration = (dateFrom, dateTo) => {
  const startDateFormatted = dayjs(dateFrom).format('MMM DD');
  const dateFormats = {
    1: `${startDateFormatted} - ${dayjs(dateTo).format('DD')}`,
    2: `${startDateFormatted}`,
    3: `${startDateFormatted} - ${dayjs(dateTo).format('MMM DD')}`,
  };
  if (dayjs(dateFrom).get('day') === dayjs(dateTo).get('day') && dayjs(dateFrom).get('month') === dayjs(dateTo).get('month')) {
    return dateFormats[2];
  }
  if (dayjs(dateFrom).get('month') === dayjs(dateTo).get('month')) {
    return dateFormats[1];
  }
  return dateFormats[3];
};

const timeFormatted = (dateFrom, dateTo) => {
  const currentDate = dayjs(dateFrom).format('MMM DD');
  const diff = dateTo.diff(dateFrom);
  const diffDate = dayjs(diff);
  return {
    currentDate: currentDate,
    diffDate: diffDate,
    dateFromFormatted: dayjs(dateFrom).format('HH:MM'),
    dateToFormatted: dayjs(dateTo).format('HH:MM'),
    timeDifference: diffDate.format('DD[D] HH[H] mm[M]'),
  };
};

const createEmptyEvent = () => {
  return {
    offerType: '',
    basePrice: '',
    destinationPoint: {
      description: '',
      name: '',
      pictures: [
        {
          src: '',
          alt: '',
        },
      ],
    },
    offers: {
      offersList: [],
      type: '',
    },
  };
};

export {formatDuration, dateFrom, timeFormatted, createEmptyEvent};
