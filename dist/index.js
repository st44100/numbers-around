"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * get numbers around.
 * @param center number for center.
 * @param range numbers of number that add both side;
 * @return Array of Numbers;
 */
function numbersAround(center, range, min, max) {
    if (min === void 0) { min = 0; }
    var result = [];
    var leftIndex = center - range;
    var rightIndex = center + range;
    var rangeLeft = leftIndex < min ? min : leftIndex;
    var rangeRight = rightIndex > max ? max : rightIndex;
    if (leftIndex !== rangeLeft) {
        rangeRight += rangeLeft - leftIndex;
    }
    if (rightIndex !== rangeRight) {
        rangeLeft -= rangeRight - leftIndex;
    }
    for (var i = rangeLeft; i <= rangeRight; i++) {
        if (i < min) {
            continue;
        }
        if (i > max) {
            continue;
        }
        result.push(i);
    }
    return result;
}
exports.default = numbersAround;
