/**
-----------------------
array
-----------------------
 */
let names = ["Mario", "Shadow", "Peach"];
names.push("pull-push-leg");
let ages = [20, 30, 40, 50];
ages.unshift(500);
// console.log(ages);
let fruits = ["apples", "pears", "bananas", "jackfruits"];
fruits.push("peaches");
const f = fruits[2];
// console.log(f);
const things = [1, true, "hello"]; // union type
const t = things[0];
// console.log(t);
/**
--------------------------------
object literals
--------------------------------
**/
let user = {
    firstName: "munna",
    age: 40,
    id: 1020,
    isFictional: true,
};
user.firstName = "rahman";
console.log(user.firstName);
/**
--------------------------------
type inference with object literals
--------------------------------
**/
let person = {
    name: "munna",
    score: 26,
};
const score = person.score;
/**
--------------------------------
functions
--------------------------------
**/
function addTwoNumber(a, b) {
    return a + b;
}
console.log(addTwoNumber(5, 4));
function findVowel(word) {
    const vowels = "AEIOUaeiou";
    let count = 0;
    for (let letters of word) {
        if (vowels.includes(letters)) {
            count++;
        }
    }
    return count;
}
console.log(findVowel("aeiou"));
function addAllNumbers(items) {
    const total = items.reduce((acc, value) => acc + value, 0);
    return total;
}
console.log(addAllNumbers([3, 5, 8, 9, 10]));
/**
--------------------------------
return type inference
--------------------------------
**/
function formatGreeting(name, greeting) {
    return `${greeting}, ${name}`;
}
const result = formatGreeting("munnna", "hello");
console.log(result);
/**
--------------------------------
any type
--------------------------------
**/
let title;
title = 25;
title = {
    hello: "world",
};
let anyThing = ["hello", true, 30, null];
anyThing.push({ id: 1234 });
console.log(anyThing);
/**
--------------------------------
functions & any
--------------------------------
**/
function addTogether(value) {
    return value + value;
}
const resultOne = addTogether("hello");
const resultTwo = addTogether(10);
console.log(`${resultOne}, ${resultTwo}`);
/**
-------------------------------
🔗tuples
-------------------------------
**/
let human = ["mario", 30, false];
//examples
let hsla;
hsla = [200, "100%", "60%", 1];
let xy;
xy = [96.5, 24.6];
function useCords() {
    //get co-ordinates
    const lat = 100;
    const long = 69;
    return [lat, long];
}
const [lat, long] = useCords();
const authorOne = { name: "mario", avatar: "/img/mario.png" };
const newPost = {
    title: "my first post",
    body: "lorem ipsum",
    tags: ["gaming", "tech"],
    create_at: new Date(),
    author: authorOne,
};
/**
--------------------------------
as function argument types
--------------------------------
**/
function createPost(post) {
    console.log(`Created post ${post.title} by ${post.author.name}`);
}
createPost(newPost);
/**
--------------------------------
interfaces with array
--------------------------------
**/
let posts = [];
posts.push(newPost);
function getRandonmColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return [r, g, b];
}
const colorOne = getRandonmColor();
const colorTwo = getRandonmColor();
console.log(colorOne, ",", colorTwo);
const userOne = { name: "munna", score: 61 };
function formatUser(user) {
    console.log(`${user.name} has an id of ${user.score}`);
}
formatUser(userOne);
/**
--------------------------------
 union types
--------------------------------
**/
let someId = "munna"; //multiple type declared
someId = 20;
let anotherId;
anotherId = "1kj1b2jkf";
anotherId = 5;
//type guards
function swapIdType(id) {
    //can only use props and methods common to
    //both number and strings
    if (typeof id === "string") {
        return parseInt(id);
    }
    else {
        return id.toString();
    }
}
const idOne = swapIdType(1);
const idTwo = swapIdType("2");
console.log(idOne, ",", idTwo);
let facebookUser = {
    type: "user",
    userName: "mun",
    id: 24,
};
let twitterUser = {
    type: "person",
    userName: "mun",
    id: 24,
};
function checkThem(value) {
    if (value.type === "user") {
        console.log(value.userName);
    }
    else {
        console.log(value.userName);
    }
}
checkThem(facebookUser);
const someQuantity = { quantity: 50 };
function printQuantity(item) {
    console.log(`the quantity of the item is  ${item.quantity}`);
}
const fruit = {
    name: "mango",
    quantity: 50,
};
const vehicle = {
    type: "car",
    quantity: 3,
};
const anotherPerson = {
    name: "munna",
    age: 30,
};
printQuantity(fruit);
printQuantity(vehicle);
function addDuoNumber(a, b) {
    return a + b;
}
function squareNumber(num) {
    return num * num;
}
function joinTwoNumbers(numOne, numTwo) {
    return `${numOne}${numTwo}`;
}
let calcs = [];
calcs.push(addTwoNumber);
// calcs.push(joinTwoNumbers);
// it depends on which type the function is returning, argmnt does not.
calcs.push(squareNumber);
const shapeOne = {
    name: "square",
    calcArea(l, w) {
        return l * w;
    },
};
const shapeTwo = {
    name: "circle",
    calcArea(radius) {
        return (Math.PI * radius) ^ 2;
    },
};
console.log(shapeOne.calcArea(5, 9));
console.log(shapeTwo.calcArea(10, 10));
const randomUser = {
    id: 1,
    format() {
        return `This user has an id of ${this.id}`;
    },
};
const bill = {
    id: 2,
    amount: 50,
    server: "munna",
    format() {
        return `User ${this.server} has Bill with id ${this.id} has $ ${this.amount} to pay`;
    },
};
function printFormatted(val) {
    console.log(val.format());
}
function printBill(bill) {
    console.log("server", bill.server);
    console.log(bill.format());
}
printFormatted(randomUser);
printBill(bill);
const alienOne = {
    id: 1,
    firstName: 'jadu'
};
const alienTwo = {
    id: '2',
    firstName: 'ninja',
    email: 'gmail@com'
};
const personThree = {
    id: '2',
    firstName: 'peach@gmail.com'
};
function printAlien(user) {
    console.log(user.id, user.email, user.firstName);
}
// printAlien(alienOne);
//# sourceMappingURL=hello.js.map