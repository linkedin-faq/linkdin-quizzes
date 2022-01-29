const isValidOption = (param: number): param is Option =>
  param === 1 || param === 2 || param === 3 || param === 4;

export default isValidOption;
