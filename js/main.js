const getRandomFloat=(min, max, places = 0) => {
  const value = (Math.random() * (max - min + 1)) + min;
  return Number.parseFloat( value.toFixed (places));
};

const getRandomInteger = (min, max) => getRandomFloat (min, max );

// источник: https://www.udacity.com/blog/2021/04/javascript-random-numbers.html
