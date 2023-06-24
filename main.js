// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory = (specimenNum, dna) => {
  const orginalDNA = dna.map((x) => x);
  const newSpecimen = {
    specimenNum,
    dna,
    mutate() {
      newSpecimen.dna = mockUpStrand()
      return newSpecimen.dna;
    },
    compareDNA () {
      let numOfMatch = 0;
      for (let i = 0; i < orginalDNA.length; i++) {
        if (orginalDNA[i] === newSpecimen.dna[i]) {
          numOfMatch = numOfMatch + 1;
        }
      }
      const compareResults = (numOfMatch / 10) * 100
      return `${compareResults}% and ${numOfMatch} Matches`
    },
    willLikelySurvive () {
      let cInt = 0;
      let gInt = 0;
      let noMatch = 0;
      for (let z = 0; z < newSpecimen.dna.length; z++) {
        if (newSpecimen.dna[z] === 'C') {
          cInt = cInt + 1;
        } else if (newSpecimen.dna[z] === 'G') {
          gInt = gInt + 1;
        } else {
          noMatch = noMatch + 1;
        }
      }
      const theMatches = cInt + gInt
      const surviveResult = (theMatches / 15) * 100
      let willLive = '';
      if (surviveResult >= 60) {
        willLive = 'live! :)';
      } else {
        willLive = 'die!! :(';
      }
      return `${theMatches} matches were found, resulting in a ${surviveResult}% match rate of survival. this specimen will ${willLive}.`
    }
  };
  return newSpecimen;
};

//Creation of the 30 Instances of our specimen object
const p30inst = () => {
  let myLab = [];
  for ( let p = 0; p <= 30; p++) {
    let pAequor = pAequorFactory([p], mockUpStrand())
    myLab.push(pAequor);
  }
  return myLab;
}
//const newObj1 = pAequorFactory(1, mockUpStrand());
//console.log(newObj1.willLikelySurvive())
const lab = p30inst();
console.log(lab[0])
console.log(lab[1])
console.log(lab[2])
console.log('...')
console.log('...')
console.log('...')
console.log(lab[30])


//TESTs PARTs 

//console.log(newObj1.dna)
//newObj1.mutate()
//console.log(newObj1.dna)
//console.log(newObj1.compareDNA())
//const newObject1 = pAequorFactory(15, 'A,B,C')
//const newObject2 = pAequorFactory(25, 'E,F,G')
//console.log(newObject2)

//newObj1.mutate()
//console.log(newObj1.compareDNA())
//console.log(newObject1)
//newObj1.mutate();
//console.log(newObj1.dna);
//const orginalDNA = mockUpStrand().map((x) => x);
//console.log(orginalDNA);
//console.log(newObject1.compareDNA())

