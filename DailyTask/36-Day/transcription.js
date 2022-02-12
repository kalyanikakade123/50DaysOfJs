const transcription = (dna) => {
  const parseDna = dna.split("");
  let rna = "";
  for (let i = 0; i < parseDna.length; i++) {
    if (parseDna[i] === "G") {
      rna += "C";
    } else if (parseDna[i] === "C") {
      rna += "G";
    } else if (parseDna[i] === "T") {
      rna += "A";
    } else if (parseDna[i] === "A") {
      rna += "U";
    } else {
      throw new Error("Invalid input DNA.");
    }
  }
  return rna;
};
console.log(transcription("ACGT"));
