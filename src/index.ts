/**
 * get numbers around.
 * @param center number for center.
 * @param range numbers of number that add both side;
 * @return Array of Numbers;
 */
export default function numbersAround(center: number, range: number, min: number = 0, max?: number): number[] {
  const result: number[] = [];

  const leftIndex = center - range;
  const rightIndex = center + range;

  let rangeLeft = leftIndex < min ? min : leftIndex;
  let rangeRight = (max && rightIndex > max) ? max : rightIndex;

  if (leftIndex !== rangeLeft) {
    rangeRight += rangeLeft - leftIndex;
  } else if (rightIndex !== rangeRight) {
    rangeLeft -= rightIndex - rangeRight;
  }

  for (let i = rangeLeft; i <= rangeRight; i++) {
    if (i < min) { continue; }
    if (i > max) { continue; }
    result.push(i);
  }
  return result;
}


