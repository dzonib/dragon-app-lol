const Dragon = require('./dragon');


const dragon = new Dragon({
  birthdate: new Date(),
  nickname: 'Dummgron'
});


// const dragon3 = new Dragon();
// const dragon4 = new Dragon({
//   birthdate: new Date()
// })

// dragon.log(); 

setTimeout(() => { 
  const dragon2 = new Dragon({
  nickname: 'dumbfuck'
})
  dragon2.log();
}, 2000)

// dragon4.log();

// dragon3.log();