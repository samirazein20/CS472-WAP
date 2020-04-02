/*Author : Zein Samira*/
"use strict";
/* QUESTION 6 */
const count_Module = (function () {
    let counter = 0;
    function add() {
        counter += 1;
    }
    function reset() {
        counter = 0;
    }
    return {
        add: add,
        reset: reset,
        counter: function () {
            return counter;
        }

    }
})();
count_Module.add()
console.log("count " + count_Module.counter());
count_Module.reset()
console.log("count " + count_Module.counter());

/** Question 7:
 * In Question 6, counter is the free variable
 * A free variable is a variable referred to by its by a function that is neither it's parameter nor it's local variable. 
 * */

/* Question 8:*/
(function () {
    console.log("------ QUESTION 8 ------");
    const make_adder = function (inc) {
        let counter = 0;
        return function () {
            return counter += inc;
        }
    };
    let add5 = make_adder(5);
    console.log(add5());
    console.log(add5());
    console.log(add5());
    let add7 = make_adder(7);
    console.log(add7());
    console.log(add7());
    console.log(add7());
}());

/* QUESTION 9
Use the module pattern can remove all names from the global name space and keep the global name space clean.

*/

/* QUESTION 10
*/
const Employee = (function () {
    console.log("------ QUESTION 10 ------");
    let name = "";
    let age = 0;
    let salary = 0;
    const getName = function () {
        return name;
    };
    const getAge = function () {
        return age;
    };
    const getSalary = function () {
        return salary;
    };

    const setName = function (newName) {
        name = newName;
    };
    const setAge = function (newAge) {
        age = newAge;
    };
    const setSalary = function (newSalary) {
        salary = newSalary;
    };
    const increaseSalary = function (percentage) {
        salary = getSalary + (getSalary * percentage / 100);
        setSalary(salary);
    };
    const incrementAge = function () {
        setAge(getAge + 1);
    }

    return {
        setName: setName,
        setAge: setAge,
        setSalary: setSalary,
        increaseSalary: increaseSalary,
        incrementAge: incrementAge
    }
})();
Employee.setName('Zein Samira');
Employee.setAge(30);
Employee.setSalary(1000000)
console.log(" Age: " + Employee.incrementAge() + " Salary: " + Employee.increaseSalary());
Employee

/* Question 11 */
console.log("------ QUESTION 11 ------");
Employee.address = "";
Employee.getAddress = function () {
  return Employee.address;
};
Employee.setAddress = function (newAddress) {
  Employee.address = newAddress;
};

Employee.setAddress("Fairfield");
console.log(" Address: " + Employee.getAddress());

