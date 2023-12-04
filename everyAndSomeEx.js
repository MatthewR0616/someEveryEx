//hasOdd

const odd = [2, 2, 2, 4, 6, 7, 8, 8]

function hasOdd(arr) {
    return arr.some(function(val) {
        return val % 2 !== 0;
    });
}

//hasZero

const zero = [66, 44, 0, 6, 1, 858, 9]

function hasZero(arr) {
    return arr.some(function(val) {
        return val === 0 
    })
}

//onlyOdd

const someOdd = [3, 5, 55, 4, 83, 9]
const yesOdd = [1, 3, 5, 5, 9, 13]

function onlyOdd(arr) {
    return arr.every(function(val) {
        return val % 2 !== 0;
    });
}

//hasNoDuplicates

function hasNoDuplicates(arr){
    return arr.every(function(val){
      return arr.indexOf(val) === arr.lastIndexOf(val);
    });
  }

  //hasCertainKey

  let obj = [
    { title: "Instructor", first: 'Elie', last: "Schoppik" },
    { title: "Instructor", first: 'Tim', last: "Garcia", isCatOwner: true },
    { title: "Instructor", first: 'Matt', last: "Lane" },
    { title: "Instructor", first: 'Colt', last: "Steele", isCatOwner: true }
  ];
  
  function hasCertainKey(obj, key) {
    return obj.every(function (val) {
      return key.toLowerCase() in val;
    });
  }

  //hasCertainValue

  let obj = [
    {title: "Instructor", first: 'Elie', last:"Schoppik"},
    {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
    {title: "Instructor", first: 'Matt', last:"Lane"},
    {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
  ]

  function hasCertainValue(obj, key, val){
    return obj.every(function(val){
      return val[key] === val;
    })
  }
