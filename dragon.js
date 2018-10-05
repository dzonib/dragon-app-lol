const DEFAULT_PROPERTIES = {
  nickname: 'unnamed',
  get birthdate() {
    return new Date();
  }
};

class Dragon {
  constructor({birthdate, nickname} = {}) {
    this.birthdate = birthdate || DEFAULT_PROPERTIES.birthdate;
    this.nickname = nickname || DEFAULT_PROPERTIES.nickname;
  }

  log() {
    console.log(`This cool dragon is born at ${this.birthdate}
     and his nick name is ${this.nickname}`);
  }
}

module.exports = Dragon;  