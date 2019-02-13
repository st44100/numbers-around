
import numbersAround from '../';

describe('number-around', () => {
  test('return correctly', () => {
    expect(numbersAround(5, 1)).toEqual([4, 5 ,6]);
    expect(numbersAround(1, 1)).toEqual([0, 1, 2]);
    expect(numbersAround(1, 1, 1)).toEqual([1, 2, 3]);
    expect(numbersAround(10, 1, 0, 10)).toEqual([8, 9 ,10]);
    expect(numbersAround(10, 2, 0, 10)).toEqual([6, 7, 8, 9 ,10]);
    expect(numbersAround(1, 4, 1, 10)).toEqual([1, 2, 3, 4 ,5, 6, 7, 8, 9]);
    expect(numbersAround(1, 10, 1, 10)).toEqual([1, 2, 3, 4 ,5, 6, 7, 8, 9, 10]);
    expect(numbersAround(99, 2, 1, 100)).toEqual([94, 95, 96, 97, 98, 99, 100]);

    const amountOfNumbers = Math.floor(5/2);
    expect(numbersAround(1, amountOfNumbers, 1, 10)).toEqual([1, 2, 3, 4 ,5]);
    expect(numbersAround(5, amountOfNumbers, 1, 10)).toEqual([3, 4 ,5, 6, 7]);
    expect(numbersAround(10, amountOfNumbers, 1, 10)).toEqual([6, 7, 8, 9, 10]);
  });
});