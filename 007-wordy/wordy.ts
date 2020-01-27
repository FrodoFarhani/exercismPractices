enum OPERATIONS {
  PLUS = "plus",
  MINUS = "minus",
  MULTYPLY = "multiplied",
  DIVIDE = "divided",
  POWER = "power"
}

export class ArgumentError {
  private errorMsg = "";
  constructor(errorMsg: string) {
    this.errorMsg = errorMsg;
  }
}
export class WordProblem {
  private arrayQuestion: Array<string> = [];
  private numbers: Array<number> = [];
  private operands: Array<string> = [];
  private result = 0;

  constructor(question: string) {
    question = this.removeLastChar(question);
    this.arrayQuestion = question.split(" ");
    this.numbers = this.getNumbers();
    this.operands = this.getOperands();
  }
  answer(): number {
    if (this.isArgumentError()) throw new ArgumentError("Error");

    this.result = this.numbers[0];
    for (let i = 0; i < this.operands.length; i++) {
      this.result = this.calulation(this.operands[i], this.numbers[i + 1]);
    }
    return this.result;
  }
  private isArgumentError(): boolean {
    let isError = false;
    this.numbers.length == 0 ||
    this.operands.length == 0 ||
    this.numbers.length == this.operands.length
      ? (isError = true)
      : isError;
    return isError;
  }
  private getNumbers(): Array<number> {
    const numbersList: Array<number> = [];

    this.arrayQuestion.filter(item => {
      if (!isNaN(parseInt(item))) numbersList.push(parseInt(item));
    });
    return numbersList;
  }
  private getOperands(): Array<string> {
    const operations: Array<string> = [
      "plus",
      "minus",
      "multiplied",
      "divided",
      "power"
    ];
    const listOfOperands: Array<string> = [];

    this.arrayQuestion.map(item => {
      operations.map(operation => {
        if (item == operation) {
          listOfOperands.push(item);
        }
      });
    });
    return listOfOperands;
  }
  private calulation(operand: string, number: number): number {
    let result = 0;
    switch (operand) {
      case OPERATIONS.PLUS:
        result = this.result + number;
        break;
      case OPERATIONS.MINUS:
        result = this.result - number;
        break;
      case OPERATIONS.MULTYPLY:
        result = this.result * number;
        break;
      case OPERATIONS.DIVIDE:
        result = this.result / number;
        break;
      case OPERATIONS.POWER:
        result = Math.pow(this.result, number);
        break;
    }
    return result;
  }
  private removeLastChar(question: string): string {
    return (question = question.slice(0, -1));
  }
}
