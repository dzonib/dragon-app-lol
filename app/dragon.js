const TRAITS = require('../data/traits');

const DEFAULT_PROPERTIES = {
  nickname: 'unnamed',
  get birthdate() {
    return new Date();
  },
  get randomTraits() {
    const traits = [];

    TRAITS.forEach(TRAIT => {
      const traitType = TRAIT.type;
      const traitValues = TRAIT.values;

      const traitValue = traitValues[Math.floor(Math.random() * traitValues.length)];

      traits.push({traitType, traitValue})
    });
    console.log(traits)

    return traits; 
  }

};

class Dragon {
  constructor({birthdate, nickname, traits} = {}) {
    this.birthdate = birthdate || DEFAULT_PROPERTIES.birthdate;
    this.nickname = nickname || DEFAULT_PROPERTIES.nickname;
    this.traits = traits || DEFAULT_PROPERTIES.randomTraits
  }

  log() {
    console.log(`This cool dragon is born at ${this.birthdate}
     and his nick name is ${this.nickname} and his color is 
    
    `);
  }
}

module.exports = Dragon;