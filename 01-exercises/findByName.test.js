function findByName(name) {
  var result = []
  for (var i = 0; i < persons.length; i++) {
    if (persons[i].firstName === name || persons[i].lastName === name) result.push(persons[i])
  }

  return result
}

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
    firstName: "Smith",
    lastName: "Bell",
    occupation: "writer",
    age: 64,
    alive: true
  },
];

test('function should retrieve person by name', function () {



  expect(findByName("Zadie")).toEqual([{
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
  }])


  expect(findByName("Virginia")).toEqual([{

    firstName: "Virginia",
    lastName: "Woolf",
    occupation: "writer",
    age: 59,
    alive: false

  }])


});




test('function should retrieve person by firstName or LastName', function () {
  expect(findByName("Smith")).toEqual([
    {
      firstName: "Zadie",
      lastName: "Smith",
      occupation: "writer",
      age: 41,
      alive: true
    },
    {
      firstName: "Smith",
      lastName: "Bell",
      occupation: "writer",
      age: 64,
      alive: true
    }
  ])
})