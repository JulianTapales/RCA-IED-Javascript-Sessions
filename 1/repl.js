// DATA TYPES
let name = 'john' //String
let age = 20 //Number
let trueOrFalse = false //Boolean
// let names = [name, 'lucas', 'ellie'] //Array

let greetingWord = () => {
  return 'Hiya, '
} //Function

let greetingFunc = (name, age, greetingWordFunction) => {
  return greetingWordFunction()+name+' you are '+age+' years old'
} // Function

let person = {
  name: 'anna',
  age: 20,
  greeting: greetingFunc,
} //Object

//DO stuff with data (operators/functions)
// let greeting = 'Hello, '+name+' you are '+age+' years old'
// greeting('anna', 34)
// person.greeting(person.name, person.age, greetingWord)

let nameIsBob = (name) => {
  if(name === 'bob') {
    return 'Yes he is bob'
  } else {
    return 'No he is not bob'
  }
}
// let names = ['Dan', 'lucas', 'ellie'] //Array


let greetAllNamesLoop = (names) => {
  for(let i = 0; i < names.length; i++) {
    // console.log(i, names[i])
    names[i] = 'Hello '+names[i]
  }
  return names
}

// let greetAllNamesLoop = (names) => {
//   let addGreeting = (name) => {
//     return 'Hello '+name
//   }

//   return names.map(addGreeting)
// }



// greetAllNamesLoop(names)

// nameIsBob('bob')


// names.map(addGreeting)

// greetAllNamesLoop(names)

// nameIsBob('bob')

let names = ['dan', 'lucas', 'ellie'] //Array

let concatenate = (accumulator, item) => {
  return accumulator + item
}

// greetAllNamesLoop(names)

let positionToRgb = (x, y) => {
	  return 'rbg('+x+',50,'+y+')'
	}

positionToRgb(230, 100)

// names.reduce(concatenate)
