/* Title: person.class.ts
Author: Professor Krasso
Date: 05 25 2022
Modified By: Allan Trejo
Description: Typescript interface implements person interface
 */

/* imports interface */
import { IPerson } from './person.interface';

/* implements interface */
class Person implements IPerson {
    firstName: string;
    lastName: string;

    constructor (firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

/* new person object with defined interface properties */
let myName = new Person("Allan", "Trejo");
console.log(`My name is ${myName.firstName} ${myName.lastName}`);