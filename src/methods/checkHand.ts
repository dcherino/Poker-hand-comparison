import groupByValue from "./groupByValue";
import checkConsecutiveNumbers from "./checkConsecutiveNumbers";
import checkSuits from "./checkSuits";
import checkLowStraight from "./checkLowStraight";
import { HAND_TYPE } from "../constants";
import { HandType } from "../types";

export default function checkHand(handValues: HandType) {
  const values = handValues.faces;
  const groupedValues = groupByValue(handValues.faces);
  const isConsecutive = checkConsecutiveNumbers(handValues.faces);
  const isSameSuit = checkSuits(handValues.suits);
  const isLowStraight = checkLowStraight(handValues.faces);

  // We get the index of the type of hand as the constant HAND_TYPE order is
  // is ordered
  if (isConsecutive && isSameSuit && values.indexOf("A") >= 0) {
    return HAND_TYPE.indexOf("royal_flush");
  } else if ((isConsecutive && isSameSuit) || (isSameSuit && isLowStraight)) {
    return HAND_TYPE.indexOf("straight_flush");
  } else if (groupedValues[0] === 4) {
    return HAND_TYPE.indexOf("four_of_a_kind");
  } else if (groupedValues[0] === 3 && groupedValues[1] === 2) {
    return HAND_TYPE.indexOf("full_house");
  } else if (isSameSuit) {
    return HAND_TYPE.indexOf("flush");
  } else if (isConsecutive || isLowStraight) {
    return HAND_TYPE.indexOf("straight");
  } else if (groupedValues[0] === 3) {
    return HAND_TYPE.indexOf("three_of_a_kind");
  } else if (groupedValues[0] === 2 && groupedValues[1] === 2) {
    return HAND_TYPE.indexOf("two_pairs");
  } else if (groupedValues[0] === 2) {
    return HAND_TYPE.indexOf("pair");
  } else {
    return HAND_TYPE.indexOf("highcard");
  }
}
