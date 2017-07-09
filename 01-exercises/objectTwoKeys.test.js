var persons = [
  {
    firstName: "Virginia",
    lastName: "Woolf",
    occupation: "writer",
    age: 59,
    alive: false
  },
  {
    firstName: "Zadie",
    lastName: "Smith",
    occupation: "writer",
    age: 41,
    alive: true
  },
  {
    firstName: "Zadie",
    lastName: "Austen",
    occupation: "writer",
    age: 41,
    alive: false
  },
  {
    firstName: "bell",
    lastName: "hooks",
    occupation: "writer",
    age: 64,
    alive: true
  },
  {
    firstName: "Won",
    lastName: "hooks",
    occupation: "writer",
    age: 64,
    alive: false
  },

];


function aliveOver60(ages, boolean) {
  var foundPeople = []
  for (var i = 0; i < persons.length; i++) {
    if (persons[i].alive === true) {
      if (persons[i].age > ages) {
        foundPeople.push(persons[i])
      }

    }
  }
  return foundPeople;
}


test('function should retrieve person by name', function () {



  expect(aliveOver60(60, true)).toEqual([{
    firstName: "bell",
    lastName: "hooks",
    occupation: "writer",
    age: 64,
    alive: true
  }

  ])




});

test('function should retrieve person by more than 40 years', function () {



  expect(aliveOver60(40, true)).toEqual([{


    firstName: "Zadie",
    lastName: "Smith",
    occupation: "writer",
    age: 41,
    alive: true
  },

  {
    firstName: "bell",
    lastName: "hooks",
    occupation: "writer",
    age: 64,
    alive: true
  }


  ])




});


