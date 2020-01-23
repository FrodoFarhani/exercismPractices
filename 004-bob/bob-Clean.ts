import { promises } from 'dns';

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
  private inputString = '';
  private lastChar = '';
  private isUpperCase = false;
  private answer = ANSWERS.default;

  private async clearAllSpaces(): Promise<void> {
    const FIND_SPACES = new RegExp(/\s/g);
    this.inputString = this.inputString.replace(FIND_SPACES, '');
  }
  private async getLastCharacter(): Promise<void> {
    this.lastChar = this.inputString.slice(-1);
  }
  private async getOnlyAlphabets(): Promise<void> {
    const FIND_ALL_ALPHABETS = new RegExp(/[a-z]+/gi);
    this.inputString = (
      this.inputString.match(FIND_ALL_ALPHABETS) || ''
    ).toString();
  }
  private async checkAlphabetState(): Promise<void> {
    const CHECK_ALL_UPPERCASE = new RegExp(/\b[A-Z0-9]+\b/);
    this.isUpperCase = this.inputString.match(CHECK_ALL_UPPERCASE)
      ? true
      : false;
  }
  private async sayAnything(): Promise<boolean> {
    const isSayAnything = !this.inputString;
    isSayAnything ? (this.answer = ANSWERS.sayingAnything) : this.answer;
    return isSayAnything;
  }
  private async askQuestion(): Promise<void> {
    const isQuestion =
      (this.inputString &&
        LASTCHARACTER.QuestionMark == this.lastChar &&
        !this.isUpperCase) ||
      (!this.inputString && LASTCHARACTER.QuestionMark == this.lastChar);
    isQuestion ? (this.answer = ANSWERS.askQuestion) : this.answer;
  }
  private async yellAtHim(): Promise<void> {
    const isYell =
      (this.isUpperCase && LASTCHARACTER.ExclamationMark == this.lastChar) ||
      (this.isUpperCase && LASTCHARACTER.QuestionMark != this.lastChar);
    isYell ? (this.answer = ANSWERS.yellAtHim) : this.answer;
  }
  private async yellAndQuestion(): Promise<void> {
    const isYellAndQuestion =
      this.isUpperCase && LASTCHARACTER.QuestionMark == this.lastChar;
    isYellAndQuestion ? (this.answer = ANSWERS.yellAndQuestion) : this.answer;
  }
  async hey(inputString: string): Promise<string> {
    this.inputString = inputString;

    await this.clearAllSpaces();
    await this.getLastCharacter();

    if (await this.sayAnything()) return this.answer;

    await this.getOnlyAlphabets();
    await this.checkAlphabetState();

    await this.askQuestion();
    await this.yellAtHim();
    await this.yellAndQuestion();

    return this.answer;
  }
}

export default Bob;
