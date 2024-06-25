//130
export const add = (num1: number, num2: number) : number => num1 + num2;


//131 
export class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    greet() {
        console.log(`Hellow, my name is ${this.name}`);
    }
}

//132
//name exports example in file
export const untilOne = () => {
    /*...*/
};
export const untilTwo = () => {
    /*...*/
};
export default class calculator {
    // class definition
}