function runValidate(form) {
    //var totalIncome = 0;
    //var totalExpense = 0;
    //var balance = 0;

    if (validateDescription(form) && validateAmount(form)){     //perform data validation
        let in_or_ex = form.elements["in_or_ex"];
        let description = form.elements["description"];
        let amount = form.elements["amount"];
        let income_list = document.getElementById("income_list");
        let expense_list = document.getElementById("expense_list");
        
        let incomeAmount = document.getElementById("incomeAmount");     
        let totalIncome = parseFloat(incomeAmount.innerText);
        
        let expenseAmount = document.getElementById("expenseAmount");
        let totalExpense = parseFloat(expenseAmount.innerText);

        let balanceAmount = document.getElementById("balanceAmount");
        

        if (in_or_ex.value == "income") {
            income_list.innerHTML += description.value +": " + amount.value + "<br>";
            totalIncome += parseFloat(amount.value);
            incomeAmount.innerText = totalIncome;
            description.value = "";
            amount.value = "";
        } else {
            expense_list.innerHTML += description.value +": " + amount.value + "<br>";
            totalExpense += parseFloat(amount.value);
            expenseAmount.innerText = totalExpense;
            description.value = "";
            amount.value = "";
        }
        balanceAmount.innerText = totalIncome - totalExpense;

        return false;
    }
    return true;
    
}

function validateDescription(form) {    //check any input in description box
    let description = form.elements["description"];

    if (description.validity.valueMissing) {
        description.setCustomValidity("Please enter the desctiption here");
        return false;
    } else {
        description.setCustomValidity("");
        return true;
    }
}

function validateAmount(form) {     //check any input in amount box
    let amount = form.elements["amount"];

    if (amount.validity.valueMissing) {
        amount.setCustomValidity("Please enter the amount here");
        return false;
    } 
    else {
        amount.setCustomValidity("");
        return true;
    }
}

function clearAllData() {       //clear all the data: balance, income, expense amount

    if (confirm("All the data will be cleared!\nAre you sure?")) {
        let income_list = document.getElementById("income_list");
        let expense_list = document.getElementById("expense_list");
        let incomeAmount = document.getElementById("incomeAmount");
        let expenseAmount = document.getElementById("expenseAmount");
        let balanceAmount = document.getElementById("balanceAmount");
        
        income_list.innerText = "";
        expense_list.innerText = "";
        incomeAmount.innerText = 0;
        expenseAmount.innerText = 0;
        balanceAmount.innerText = 0;
    }    
}

function showInstruction(){     //display instrurtion text
    instruction_container = document.getElementById("instruction_container");
    instruction_container.classList.add("show");
}

function closeInstruction() {   //hide instruction text
    instruction_container = document.getElementById("instruction_container");
    instruction_container.classList.remove("show");
}