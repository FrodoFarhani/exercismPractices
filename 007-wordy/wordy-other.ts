class ArgumentError extends Error {
  constructor(errorMsg: string) {
    super(errorMsg);
  }
}

class WordProblem {
  private numberList: number[];
  private operationList: string[];

  constructor(question: string) {
    this.operationList = question.match(/plus|minus|multiplied|divided/g) || [];
    this.numberList = (question.match(/\s+-?[\d]+/g) || []).map((e: string) =>
      Number(e)
    );
  }

  public answer() {
    if (this.operationList && this.operationList.length > 0) {
      let result: number = this.numberList[0];

      this.operationList.forEach((operation: string, i: number) => {
        if (operation === "plus") {
          result += this.numberList[i + 1];
        } else if (operation === "minus") {
          result -= this.numberList[i + 1];
        } else if (operation === "multiplied") {
          result *= this.numberList[i + 1];
        } else if (operation === "divided") {
          result /= this.numberList[i + 1];
        }
      });

      return result;
    } else {
      throw new ArgumentError("Error");
    }
  }
}

export { WordProblem, ArgumentError };
