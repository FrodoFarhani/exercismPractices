class Bob {
  hey(question: string) {
    question = question.replace(/\s/g, ''); //replace all spaces
    const lastChar = question.slice(-1); //get last charachter
    const matcher = /[a-z]+/gi; //regex to get all alphabets in string
    const selectOnlyCharacters = question.match(matcher);

    if (question == '' || question == null) return 'Fine. Be that way!';
    else if (selectOnlyCharacters == null && lastChar == '?') return 'Sure.';
    else if (selectOnlyCharacters == null) {
      return 'Whatever.';
    }

    question = selectOnlyCharacters.join('');
    const charState = question.match(new RegExp(/\b[A-Z]+\b/))
      ? 'onlyUpperCase'
      : 'none';

    switch (lastChar) {
      case '!': {
        if (charState == 'onlyUpperCase') return 'Whoa, chill out!';
        else return 'Whatever.';
      }
      case '?': {
        if (charState == 'onlyUpperCase')
          return "Calm down, I know what I'm doing!";
        else return 'Sure.';
      }

      default: {
        if (charState == 'onlyUpperCase') return 'Whoa, chill out!';
        else return 'Whatever.';
      }
    }
  }
}

export default Bob;
