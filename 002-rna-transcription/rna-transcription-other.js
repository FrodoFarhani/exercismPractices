var DnaTranscriber = function() {};

const rnaMap = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U'
};

DnaTranscriber.prototype.toRna = function(dna) {
  return dna.replace(/[GCTA]/g, l => {
    return rnaMap[l];
  });
};

module.exports = DnaTranscriber;
