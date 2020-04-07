const aPlusZ = "a".charCodeAt(0) + "z".charCodeAt(0);
const code = (text: string): string =>
  text.replace(/./g, ch => {
    if (ch.match(/[^a-z\d]/i)) return "";
    if (ch.match(/\d/)) return ch;
    return String.fromCharCode(aPlusZ - ch.toLowerCase().charCodeAt(0));
  });

export default class AtbashCipher {
  encode = (text: string): string =>
    code(text)
      .match(/.{1,5}/g)!
      .join(" ");
  decode = (text: string): string => code(text);
}
