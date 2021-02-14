export enum RESULT {
  WIN = 1,
  LOSS,
  TIE,
}

// Ordered from the lower hand to higher
export const HAND_TYPE: Array<string> = [
  "highcard",
  "pair",
  "two_pairs",
  "three_of_a_kind",
  "straight",
  "flush_5",
  "full_house",
  "four_of_a_kind",
  "straight_flush",
  "royal_flush",
];

export const SUITS: Array<string> = ["S", "H", "D", "C"];

export const CARD_VALUES: Array<string> = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "T",
  "J",
  "Q",
  "K",
  "A",
];
