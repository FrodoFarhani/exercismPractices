enum ANSWERS {
  sayingAnything = 'Fine. Be that way!',
  askQuestion = 'Sure.',
  yellAtHim = 'Whoa, chill out!',
  yellAndQuestion = "Calm down, I know what I'm doing!",
  default = 'Whatever.'
}
enum LASTCHARACTER {
  QuestionMark = '?',
  ExclamationMark = '!'
}

class Bob {
  constructor() {}
  private inputString: string = '';
  private lastChar: string = '';
  private isUpperCase: boolean = false;

  private async clearAllSpaces() {
    const FIND_SPACES = new RegExp(/\s/g);
    this.inputString = this.inputString.replace(FIND_SPACES, '');
  }
  private async getLastCharacter() {
    this.lastChar = this.inputString.slice(-1);
  }
  private async getOnlyAlphabets() {
    const FIND_ALL_ALPHABETS = new RegExp(/[a-z]+/gi);
    this.inputString = (
      this.inputString.match(FIND_ALL_ALPHABETS) || ''
    ).toString();
  }
  private async checkAlphabetState() {
    const CHECK_ALL_UPPERCASE = new RegExp(/\b[A-Z0-9]+\b/);
    this.isUpperCase = this.inputString.match(CHECK_ALL_UPPERCASE)
      ? true
      : false;
  }
  private async sayAnything() {
    const isSayAnything = !this.inputString;
    return isSayAnything;
  }
  private async askQuestion() {
    const isQuestion =
      (this.inputString &&
        LASTCHARACTER.QuestionMark == this.lastChar &&
        !this.isUpperCase) ||
      (!this.inputString && LASTCHARACTER.QuestionMark == this.lastChar);
    return isQuestion;
  }
  private async yellAtHim() {
    const isYell =
      (this.isUpperCase && LASTCHARACTER.ExclamationMark == this.lastChar) ||
      (this.isUpperCase && LASTCHARACTER.QuestionMark != this.lastChar);
    return isYell;
  }
  private async yellAndQuestion() {
    const isYellAndQuestion =
      this.isUpperCase && LASTCHARACTER.QuestionMark == this.lastChar;
    return isYellAndQuestion;
  }
  async hey(inputString: string) {
    this.inputString = inputString;

    await this.clearAllSpaces();
    await this.getLastCharacter();

    if (await this.sayAnything()) {
      return ANSWERS.sayingAnything;
    }

    await this.getOnlyAlphabets();

    await this.checkAlphabetState();

    if (await this.askQuestion()) {
      return ANSWERS.askQuestion;
    }
    if (await this.yellAtHim()) {
      return ANSWERS.yellAtHim;
    }
    if (await this.yellAndQuestion()) {
      return ANSWERS.yellAndQuestion;
    }

    return ANSWERS.default;
  }
}

export default Bob;
