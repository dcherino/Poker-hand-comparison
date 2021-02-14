import PokerHand from "../PokerHand";
import { CARD_VALUES } from "../constants";
import getHigherCard from "../methods/getHigherCard";

describe("Get the higher index when matching values with CARD_VALUES items", () => {
  it("should get the higher index", () => {
    const hand = new PokerHand("2C AD 3H KS QD");
    const higher = CARD_VALUES.indexOf("A");

    expect(getHigherCard(hand.handValues.faces)).toBe(higher);
  });
});
