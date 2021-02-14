// Method to check if the hand is a low straight (Using Ace as number 1)
export default function checkLowStraight(faces: Array<string>): Boolean {
  const lowStraightValues = ["A", "2", "3", "4", "5"];
  const uniqFaces = Array.from(new Set(faces));

  if (uniqFaces.length < 5) return false;

  return uniqFaces.every((face) => lowStraightValues.indexOf(face) >= 0);
}
