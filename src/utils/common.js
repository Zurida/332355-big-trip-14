const getRandomValue = (min = 0, max = 5) => {
  return Math.floor(Math.random() * (max - min) + min);
};

export {getRandomValue};
