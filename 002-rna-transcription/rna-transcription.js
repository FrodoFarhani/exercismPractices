//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const dnaStr = ['A', 'C', 'G', 'T'];
const rnaStr = ['U', 'G', 'C', 'A'];
export const toRna = inputStr => {
  let res = '';
  if (inputStr == '') return res;
  else {
    for (let i = 0; i < inputStr.length; i++) {
      res += rnaStr[dnaStr.indexOf(inputStr[i])];
    }
    return res;
  }
};
