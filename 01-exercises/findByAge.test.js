function findByAge(age, aboveOrBelow) {
    var newPeople = []
    for (var i = 0; i < persons.length; i++){
        if (aboveOrBelow === true){
            if (persons[i].age < age){
                newPeople.push(persons[i])
            }
        }
        else{
             if (persons[i].age > age){
                newPeople.push(persons[i])
            }
        }
        
    }
    return newPeople
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


test('function should find people over 60', function() {
    
    expect(findByAge(60,false)).toEqual([
        {
            firstName: "bell",
            lastName: "hooks",
            occupation: "writer",
            age: 64,
            alive: true
        }
    ]);
})


test('function should find people below 60', function() {
    
    expect(findByAge(60,true)).toEqual([
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
    }
    ]);
})