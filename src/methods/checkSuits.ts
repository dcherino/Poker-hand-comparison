// Check if all suits are the same in order to consider
// the hand as Flush or Straight flush
export default function checkSuits(suits: Array<string>): Boolean {
  return suits.every((suit) => suit === suits[0]);
}
