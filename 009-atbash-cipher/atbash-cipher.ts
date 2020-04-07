export default class AtbashCipher {
  private plain: string;
  constructor() {
    this.plain = "abcdefghijklmnopqrstuvwxyz";
  }
  encode(input: string): string {
    input = this.clearText(input);

    const result = this.cipher(input)
      .match(/.{0,5}/g)!
      .join(" ")
      .trim();
    return result;
  }
  decode(input: string): string {
    input = this.clearText(input);

    const result = this.cipher(input).trim();
    return result;
  }

  private cipher(input: string): string {
    const result = Array.from(input).map(item => {
      const inverseIndex = Math.abs(
        this.plain.indexOf(item) - this.plain.length + 1
      );
      return !parseInt(item) ? this.plain[inverseIndex] : item;
    });
    return result.join("");
  }

  private clearText(input: string): string {
    return input
      .split(" ")
      .join("")
      .split(",")
      .join("")
      .split(".")
      .join("")
      .toLowerCase();
  }
}
