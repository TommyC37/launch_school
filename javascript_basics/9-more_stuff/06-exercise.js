let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear'
];

function allMatches(words, regexp) {
  let result = [];
  for (let word of words) {
    if (regexp.test(word)) {
      result.push(word);
    }
  }
  return result;
}

console.log(allMatches(words, /lab/));