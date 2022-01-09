let id: number = 5
let company: string = "RAI Tech"
let isMale: boolean = true
let x: any = 10
x = false

let ids: number[] = [1, 2, 3, 4, 5]
let person: [number, string, boolean] = [1, "James", true]
let persons: [number, string, boolean][] = [
    [1, "James", true],
    [2, "Charlie", true],
    [3, "Alan", true],
]
let pid: number | string
pid = 10
pid = "James"

enum Direction {
    UP = 1, DOWN, LEFT, RIGHT
}

enum Direction2 {
    UP = "up",
    DOWN = "down",
    LEFT = "left",
    RIGHT = "right"
}

type User = {
    id: number,
    name: string,
}

const user: User = {
    id: 1,
    name: "James"
}

let cid: any
// let customerId = cid as number
let customerId = <number>cid
customerId = 10

function add(x: number, y: number): number {
    return x + y
}

const subtract = (x: number, y: number) => x - y

console.log(add(3, 5))

function log(message: number | string): void {
    console.log(message)
}

interface UserInterface {
    readonly id: number,
    name: string,
    age?: number
}

const user1: UserInterface = {
    id: 1,
    name: "James",
}

type Point = number | string
const p: Point = "x"

interface addInterface {
    (x: number, y: number): number
}

const addFn: addInterface = (x: number, y: number): number => x + y
const subFn: addInterface = (x: number, y: number): number => x - y


interface PersonInterface {
    id: number
    name: string

    register(): string
}

class Person implements PersonInterface {
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    register(): string {
        return `${this.name} is registered`
    }
}

class Employee extends Person {
    position: string

    constructor(id: number, name: string, position: string) {
        super(id, name)
        this.position = position
    }
}

const james = new Person(1, "James")
const alan = new Person(2, "Alan")
const emp = new Employee(1, "Rob", "manager")
console.log(emp)

function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numArray = getArray([1, 2, 3, 4])
let strArray = getArray(["hello", "world"])
numArray.push(5)
