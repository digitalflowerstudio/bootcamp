const person = {
  name: "Florian",
  age: "22",
  sayNameAge: () => {
    alert(`Hello my name is ${person.name} and I'm ${person.age} years old!`);
  },
};

console.log(person.name);
console.log(person.age);

person.sayNameAge();
