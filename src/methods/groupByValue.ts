import { CARD_VALUES } from "../constants";

// Counting the concurrences of each number (face), store them in an Array
// and sorting them descendently so we can check the hand.
//
// Example for faces: A 4 5 8 A will return:
// Array<number>[2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// (Two Aces, one 4, one 5, one 8, zero for the rest of values that weren't in the Array)
export default function groupByValue(faces: Array<string>): Array<number> {
  const groupedValues = CARD_VALUES.map(
    (cardValue) => faces.filter((value) => value === cardValue).length
  ).sort((a, b) => b - a);

  return groupedValues;
}
