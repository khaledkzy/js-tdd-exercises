function findAlive(writers) {
  var aliveWriter = []
  for (var i = 0; i < writers.length; i++) {
    if (writers[i].alive === true) {
      aliveWriter.push(writers[i])
    }
  }
  return aliveWriter;
  // ToDo: Implement this function to make all the tests below pass
  // DO NOT Change the tests (you can add more tests though)
}


test('function should retrieve only alive writers', function () {
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
      firstName: "Jane",
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
  ];

  var result = findAlive(persons);

  expect(result).toEqual([{
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
  }])
});