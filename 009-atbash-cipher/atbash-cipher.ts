export default class AtbashCipher {
  private plain: string;
  constructor() {
    this.plain = "abcdefghijklmnopqrstuvwxyz";
  }
  encode = (input: string): string =>
    this.cipher(input)
      .match(/.{0,5}/g)!
      .join(" ")
      .trim();
  decode = (input: string): string => this.cipher(input).trim();
  private clearText = (input: string): string =>
    input
      .split(",")
      .join("")
      .split(".")
      .join("")
      .toLowerCase()
      .trim();
  private cipher(input: string): string {
    input = this.clearText(input);
    const result = Array.from(input).map(item => {
      const inverseIndex = Math.abs(
        this.plain.indexOf(item) - this.plain.length + 1
      );
      return !parseInt(item) ? this.plain[inverseIndex] : item;
    });
    return result.join("");
  }
}
