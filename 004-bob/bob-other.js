import * as R from 'ramda';

const isQuestion = R.endsWith('?');
const isAllUpper = (s) => s === s.toUpperCase();
const containsLetters = (s) => !!s.match(/[a-z]/i);
const isWhitespaceOrEmpty = R.pipe(R.trim, R.isEmpty);
const isShouting = R.both(containsLetters, isAllUpper);

class Bob {
  hey(input) {
    return R.cond([
      [isShouting, R.always('Whoa, chill out!')],
      [isQuestion, R.always('Sure.')],
      [isWhitespaceOrEmpty, R.always('Fine. Be that way!')],
      [R.T, R.always('Whatever.')]
    ])(input);
  }
}

export default Bob;
