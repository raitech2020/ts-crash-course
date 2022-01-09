"use strict";
let id = 5;
let company = "RAI Tech";
let isMale = true;
let x = 10;
x = false;
let ids = [1, 2, 3, 4, 5];
let person = [1, "James", true];
let persons = [
    [1, "James", true],
    [2, "Charlie", true],
    [3, "Alan", true],
];
let pid;
pid = 10;
pid = "James";
var Direction;
(function (Direction) {
    Direction[Direction["UP"] = 1] = "UP";
    Direction[Direction["DOWN"] = 2] = "DOWN";
    Direction[Direction["LEFT"] = 3] = "LEFT";
    Direction[Direction["RIGHT"] = 4] = "RIGHT";
})(Direction || (Direction = {}));
var Direction2;
(function (Direction2) {
    Direction2["UP"] = "up";
    Direction2["DOWN"] = "down";
    Direction2["LEFT"] = "left";
    Direction2["RIGHT"] = "right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: "James"
};
let cid;
// let customerId = cid as number
let customerId = cid;
customerId = 10;
function add(x, y) {
    return x + y;
}
const subtract = (x, y) => x - y;
console.log(add(3, 5));
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: "James",
};
const p = "x";
const addFn = (x, y) => x + y;
const subFn = (x, y) => x - y;
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is registered`;
    }
}
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const james = new Person(1, "James");
const alan = new Person(2, "Alan");
const emp = new Employee(1, "Rob", "manager");
console.log(emp);
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["hello", "world"]);
numArray.push(5);
