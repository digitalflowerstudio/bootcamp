// First Array

let firstName = "John";
let lastName = "Walker";
let job = "Janitor";

let person = [firstName, lastName, job];

console.log(person);

let home = "Earth";

person.push(home);

console.log(person);

let lastValue1 = person.shift();

console.log(lastValue1);

console.log(person);

// Second Array

let firstFriend = "Jim";
let secondFriend = "Lucas";
let thirdFriend = "Keanu";

let friends = [firstFriend, secondFriend, thirdFriend];

console.log(friends);

let fourthFriend = "Bob";

friends.push(fourthFriend);

console.log(friends);

let lastValue2 = friends.shift();

console.log(lastValue2);

console.log(friends);

// Third Array

let food1 = "Meat";
let food2 = "Veggies";
let food3 = "Rice";

let favFood = [food1, food2, food3];

console.log(favFood);

let food4 = "Pizza";

favFood.push(food4);

console.log(favFood);

let lastValue3 = favFood.shift();

console.log(lastValue3);

console.log(favFood);
