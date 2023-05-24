function createHobbit (name, age) {
  console.log(name, age)
  var hobbit = {
    name: name,
    age: age
  }
  if (age === undefined) {
    hobbit.age = 0;
  if (name === undefined) {
    hobbit.name = 'unknown'
  }
  }
  return hobbit
}

function celebrateBirthday(hobbit) {
  console.log('hobbit: ', hobbit);
  hobbit.age = hobbit.age + 1
    return hobbit
}

module.exports = {
createHobbit, 
celebrateBirthday, 
  // getRing, 
  // meetPeople, 
  // findFriends
}