//Question 1
const person = {
    'name': "",
    'dateOfBirth': " ",
    'getName': function() {
        return this.name;
    },
    'setName': function(newName) {
        this.name = newName;
    }
};

let isAPerson = Object.create(person);
isAPerson.setName("John");
isAPerson.dateOfBirth = "1998-12-10";

console.log("The person's name is " + isAPerson.getName());
console.log(isAPerson.getName() + " was born in " + isAPerson.dateOfBirth);

//Question two
let toDay = new Date();
let empIsAPerson = Object.create(person);

const employee = {
    'salary': "$0",
    'hireDate': new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate(),
    'doJob': function(jobTitle) {
        const result = empIsAPerson.name + " " + "is a " + jobTitle + " who earns " + this.salary;
        return result;
    }
}
empIsAPerson.setName("Anna");
employee.salary = "$" + 249 + "," + 995.50;
const job = employee.doJob("Programmer");
console.log(job);

//Question three

class PersonClass {
    Person(personName, personDateOfBirth) {
        this.personName = personName;
        this.personDateOfBirth = personDateOfBirth;
    }
    getConstructorName() {
        return this.personName;
    }
    setConstructorName(newConstructorName) {
        this.personName = newConstructorName;
    }
    toString() {
        const result = "Name: " + this.getConstructorName() + " ,Date Of Birth: " + this.personDateOfBirth;
        return result;
    }
}
let newPersonClass = new PersonClass();
let newPerson = newPersonClass.Person("Zein Samira", "1995-03-25");
console.log(newPersonClass.toString());

//Question 4 (Login form)
$(function() {
    $('#submit').on("submit",
        function(evt) {
            evt.preventDefault();
            // @ts-ignore
            console.log("Email: " + document.getElementById('email').value);
            // @ts-ignore
            console.log("Password: " + document.getElementById('password').value);
            // @ts-ignore
            console.log("Website: " + document.getElementById('website').value);
        });

});
//Question 4 (Add Product form)
$("#productForm").on(
    "submit",
    function(event) {
        event.preventDefault();
        let productNumber = document.getElementById('productNumber').value;
        let quantityInStock = document.getElementById('quantityInStock').value;
        let productName = document.getElementById('productName').value;
        let supplier = document.getElementById('supplier').value;
        let price = document.getElementById('price').value;
        let date = document.getElementById('date').value;

        /*  let arr = {
             "ProductNumber": productNumber,
             "QuantityInStock": quantityInStock,
             "ProductName": productName,
             "Supplier": supplier,
             "Price": price,
             "Date": date
         };
         for (const field in arr) {
             console.log(field +": " + arr[field]);
         } */


        let txt1 = $("<p>").html(productNumber);
        let txt2 = $("<p>").html(quantityInStock);
        let txt3 = $("<p>").html(productName);
        let txt4 = $("<p>").html(supplier);
        let txt5 = $("<p>").html(price);
        let txt6 = $("<p>").html(date);
        console.log("txt6 content " + txt6.html())
        $("container").append(txt1, txt2, txt3, txt4, txt5, txt6);
    });