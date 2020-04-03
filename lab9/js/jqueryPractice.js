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
isAPerson.dateOfBirth = new Date(1998 - 12 - 10);

console.log(`"The person's name is " ${isAPerson.getName()}`);
console.log(`${isAPerson.getName()} + " was born in " ${isAPerson.dateOfBirth}`);

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
$(document).ready(function() {
    $('#submitButton').click(
        function(evt) {
            alert("Hello am clicked");
            console.log("Email: " + document.getElementById('email').value);
            console.log("Password: " + document.getElementById('password').value);
            console.log("Website: " + document.getElementById('website').value);
            evt.preventDefault();
        });

    //Question 4 (Add Product form)
    $("#productSubmit").on("click", function(evt) {
        const pdtName = $("#productName").val();
        const qtyInStock = $("#quantity").val();
        const pdtNumber = $("#productNumber").val();
        const unit = $("#unitPrice").val();
        const supplier = $("#supplier").val();
        const dateSupplied = $("#dateSupplied").val();

        const divProductData = $("#newDivs");
        $("#pdtName").text(pdtName);
        $("#pdtQty").text(qtyInStock);
        $("#pdtNum").text(pdtNumber);
        $("#unit").text(unit);
        $("#suppliers").text(supplier);
        $("#date").text(dateSupplied);

        divProductData.css("display", "block");
        evt.preventDefault();

    });

});