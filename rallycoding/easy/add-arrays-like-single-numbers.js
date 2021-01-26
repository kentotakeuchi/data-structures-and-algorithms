const solve = (arrOne, arrTwo) => {
  return (parseInt(arrOne.join('')) + parseInt(arrTwo.join('')))
    .toString()
    .split('');
};
