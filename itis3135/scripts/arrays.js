// const person = ["Ashiwn Babu", "Kusal Sam", "Anakin Skywalker", "Ahsoka Tano", "Boba Fett", "Han Solo"];
// const salaries = [180000.00, 120000.00, 160000.00, 60000.00, 110000.00, 80000.00];

const person = [];
const salaries = [];

window.onload = function(){
    document.getElementById("employees").focus();
}

//Adds an employee and their salary to the existing arrays
function addSalary(){
    let newPerson = document.getElementById("employees").value;
    let newSalary = document.getElementById("new-salary").value;
    validateSalary(newPerson, newSalary);
}
//Checks to make sure inputs are valid
function validateSalary(name, money){
    if(isNaN(parseFloat(money)) || parseFloat(money)<0){
        alert("Please enter a valid input for the employee salary");
        document.getElementById("employees").focus();
    }else{
        person.push(name);
        salaries.push(parseFloat(money));
        alert(`Employee ${name} added successfully with a salary of $${money}!`);
        document.getElementById("new-salary").value="";
        document.getElementById("employees").focus();
    }
}

// gets both the average and highest salaries
function displayResults(){
    let total = 0;
    let highest=salaries[0];
    for(let i=0; i<salaries.length; i++){
        total+=salaries[i];
        if(salaries[i]>highest){
            highest=salaries[i];
        }
    }
    let average = total/salaries.length;

    //Create <p> and give it the text and value for highest salary
    const highestParagraph = document.createElement("p");
    const highestText = document.createTextNode(`Highest Salary: $${highest.toFixed(2)}`);
    highestParagraph.appendChild(highestText);

    //Create <p> and give it the text and value for average salary
    const averageParagraph = document.createElement("p");
    const averageText = document.createTextNode(`Average Salary: $${average.toFixed(2)}`);
    averageParagraph.appendChild(averageText);

    //Changes the content of the div and appends the created nodes, ensuring that the most current value is applied and that the values don't get repeatedly added to the div
    const resultDiv = document.getElementById("results");
    resultDiv.innerHTML="<h2>Highest and Average Salaries<h2>";
    resultDiv.appendChild(highestParagraph);
    resultDiv.appendChild(averageParagraph);
}

function displaySalary(){
    const resultTable = document.getElementById("results-table-body");
    let tableRow; //used to create <tr>s
    let tableDataPerson; //used to store the <td> that contains the employee name
    let tableDataSalary; //used to store the <td> that contains the employee salary
    let personText; //used to store the text nodes containing the employee names
    let salaryText; //used to store the text nodes containing the employee salaries
    
    resultTable.innerHTML=""; //Clear the previous table data so that it doesn't duplicate itself

    for(let j=0; j<person.length; j++){
        tableRow = document.createElement("tr"); //Creates new table row

        //Creates 2 table data elements, 2 text nodes, adds the employee and their salary to nodes, and then appends the nodes to the tds
        tableDataPerson = document.createElement("td");
        personText=document.createTextNode(`${person[j]}`);
        tableDataSalary=document.createElement("td");
        salaryText=document.createTextNode(`${salaries[j]}`);
        tableDataPerson.appendChild(personText);
        tableDataSalary.appendChild(salaryText);
        
        //Appends both tds to the table row and then append the table row to the table body
        tableRow.appendChild(tableDataPerson);
        tableRow.appendChild(tableDataSalary);
        resultTable.appendChild(tableRow);
    }
    
}