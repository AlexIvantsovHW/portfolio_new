import { isNumber } from 'class-validator';

export const numberLengthValidator = (number: number) => {
  if (!isNumber(number)) {
    console.log(false);
  } else {
    console.log(false);
  }
};
