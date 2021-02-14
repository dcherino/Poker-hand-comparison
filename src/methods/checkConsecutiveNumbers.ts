import { CARD_VALUES } from "../constants";

// Get the index of the faces against the CARD_VALUES array
// and check if these indexes are consecutives
export default function checkConsecutiveNumbers(faces: Array<string>): Boolean {
  const cardValues = faces
    .map((face: string) => CARD_VALUES.indexOf(face))
    .sort((a: number, b: number): number => a - b);
  const checker: Array<number> = [];

  cardValues.reduce((acc: number, current: number): number => {
    if (acc === current - 1) {
      checker.push(1);
      return acc + 1;
    } else {
      checker.push(0);
    }
    return acc;
  });

  return checker.every((value) => value === 1);
}
