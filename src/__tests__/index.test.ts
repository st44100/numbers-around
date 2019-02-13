
import numberAround from '../';

describe('number-around', () => {
  test('return correctly', () => {
    expect(numberAround(5, 1)).toEqual([4, 5 ,6]);
    expect(numberAround(1, 1)).toEqual([0, 1, 2]);
    expect(numberAround(1, 1, 1)).toEqual([1, 2, 3]);
    expect(numberAround(10, 1, 0, 10)).toEqual([8, 9 ,10]);
    expect(numberAround(10, 2, 0, 10)).toEqual([6, 7, 8, 9 ,10]);
    expect(numberAround(1, 4, 1, 10)).toEqual([1, 2, 3, 4 ,5, 6, 7, 8, 9]);
    expect(numberAround(1, 10, 1, 10)).toEqual([1, 2, 3, 4 ,5, 6, 7, 8, 9, 10]);
    expect(numberAround(99, 2, 1, 100)).toEqual([94, 95, 96, 97, 98, 99, 100]);

    const amountOfNumbers = Math.floor(5/2);
    expect(numberAround(1, amountOfNumbers, 1, 10)).toEqual([1, 2, 3, 4 ,5]);
    expect(numberAround(5, amountOfNumbers, 1, 10)).toEqual([3, 4 ,5, 6, 7]);
    expect(numberAround(10, amountOfNumbers, 1, 10)).toEqual([6, 7, 8, 9, 10]);
  });
});