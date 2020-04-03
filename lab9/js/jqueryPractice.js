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
console.log("question4-------0");
$(function() {
    console.log("question4-------1");
    $('#submitButton').on("click",
        function(evt) {
            console.log("question4-------2");
            console.log("Email: " + document.getElementById('email').value);
            console.log("Password: " + document.getElementById('password').value);
            console.log("Website: " + document.getElementById('website').value);
            evt.preventDefault();
        });

    //Question 4 (Add Product form)
    $("#submitButton").on(
        "submit",
        function(event) {
            event.preventDefault();
            let productNumber = document.getElementById('productNumber').value;
            let quantityInStock = document.getElementById('quantity').value;
            let productName = document.getElementById('productName').value;
            let supplier = document.getElementById('supplier').value;
            let unitPrice = document.getElementById('unitPrice').value;
            let dateSupplied = document.getElementById('dateSupplied').value;

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


            let text1 = $("<p>").html(productNumber);
            let text2 = $("<p>").html(quantityInStock);
            let text3 = $("<p>").html(productName);
            let text4 = $("<p>").html(supplier);
            let text5 = $("<p>").html(unitPrice);
            let text6 = $("<p>").html(dateSupplied);
            console.log("text6 content " + text6.html())
            $("container").append(text1, text2, text3, text4, text5, text6);
        });

});