function generateRandomDecimalInRangeFormatted(min, max, places) {
    let value = (Math.random() * (max - min + 1)) + min;
    return Number.parseFloat(value).toFixed(places);
};
//источник: https://www.udacity.com/blog/2021/04/javascript-random-numbers.html
