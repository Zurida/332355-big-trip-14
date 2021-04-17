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
    dateFromAttribute: dayjs(dateFrom).format('YYYY-MM-DDTHH:mm'),
    dateToAttribute: dayjs(dateTo).format('YYYY-MM-DDTHH:mm'),
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

const renderTemplate = (container, template, position) => {
  container.insertAdjacentHTML(position, template);
};

const RenderPosition = {
  AFTERBEGIN: 'afterbegin',
  BEFOREEND: 'beforeend',
};

const renderElement = (container, element, place) => {
  if (place === RenderPosition.BEFOREEND) container.prepend(element);
  if (place === RenderPosition.AFTERBEGIN) container.append(element);
};

const createElement = (template) => {
  const newElement = document.createElement('div');
  newElement.innerHTML = template;
  return newElement.firstChild;

};
export {formatDuration, dateFrom, timeFormatted, createEmptyEvent, renderTemplate, renderElement, createElement, RenderPosition};
