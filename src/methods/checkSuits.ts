// Check if all suits are the same in order to consider

import { Suits } from "../types";

// the hand as Flush or Straight flush
export default function checkSuits(suits: Array<Suits>): Boolean {
  return suits.every((suit) => suit === suits[0]);
}
