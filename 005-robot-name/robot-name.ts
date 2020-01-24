export default class RobotName {
  ROBOT_NAMES: Array<string> = [];
  ROBOT_NAME = '';

  constructor() {
    this.ROBOT_NAME = this.generateUniqueName();
  }
  resetName(): string {
    return this.generateUniqueName();
  }

  get name(): string {
    return this.ROBOT_NAME;
  }
  private randomCharacter(): string {
    const CHARS_ARRAY = 'ABCDEFGHIJKLMNOPQRSTUWXYZ';
    return CHARS_ARRAY[Math.floor(Math.random() * CHARS_ARRAY.length)];
  }
  private randomNumbers(): string {
    return Math.floor(Math.random() * 10).toString();
  }
  private generateUniqueName(): string {
    const randomChars = this.randomCharacter() + this.randomCharacter();
    const randomNumbers =
      this.randomNumbers() + this.randomNumbers() + this.randomNumbers();
    const robotName = randomChars + randomNumbers;

    if (this.isUnique(robotName)) this.generateUniqueName();
    else {
      this.ROBOT_NAME = robotName;
      this.ROBOT_NAMES.push(this.ROBOT_NAME);
    }
    return robotName;
  }

  private isUnique(robotName: string): string {
    return (
      this.ROBOT_NAMES.find(item => {
        return item === robotName;
      }) || ''
    );
  }
}
