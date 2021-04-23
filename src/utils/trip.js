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

const createElement = (template) => {
  const newElement = document.createElement('div');
  newElement.innerHTML = template;
  return newElement.firstChild;

};


export {createEmptyEvent, createElement};
