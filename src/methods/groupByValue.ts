import { CARD_VALUES } from "../constants";

// Checking the concurrences of each hand faces and
// sorting them so we can check the hand
// Example for faces: A 4 5 8 A will return:
// Array<number>[2, 1, 1, 1]  (Two Aces, one 4, one 5 and one 8)
export default function groupByValue(faces: Array<string>): Array<number> {
  const groupedValues = CARD_VALUES.map(
    (cardValue) => faces.filter((value) => value === cardValue).length
  ).sort((a, b) => b - a);

  return groupedValues;
}
