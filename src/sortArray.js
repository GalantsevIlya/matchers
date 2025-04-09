export default function sortArray(array) {
  array.sort((a, b) => b.health - a.health);
  return array;
}
