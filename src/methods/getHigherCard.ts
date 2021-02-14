import { CARD_VALUES } from "../constants";

export default function getHigherCard(faces: Array<string>): number {
  const values = faces.map(value => CARD_VALUES.indexOf(value))
  return Math.max(...values)
}