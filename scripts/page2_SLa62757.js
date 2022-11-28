window.addEventListener("DOMContentLoaded",function(){
    run();    
});




function run() {
    var form = document.getElementById("form")
    var input = document.getElementById("input");
    var toDoList = document.getElementById("toDoList");
    
    let list = JSON.parse(localStorage.getItem("list"));    //get data from local storage
    if (list != null) {
        list.forEach(item => {
            addToDoList(item);  //load the item to to-do list
        })
    }    


    form.addEventListener('submit', (e) => {
        e.preventDefault();     //prevent form submission
        addToDoList();          //run the funciton to add new item
    })
}

function addToDoList(item) {
    let toDoText = input.value; //get the text from the input textbox

    if (item) {     //if the list from local storage is not empty
        toDoText = item.name;   //get the item text from array which is from local storage
    }

    let newItem = document.createElement("li");
    newItem.innerText = toDoText;
    
    if (item && item.completed) {   //if the item from local storage is completed
        newItem.classList.add("completed");     //add completed-class to class list
    }

    //if the user left click the item, the item will be marked completed by chaning the css class
    newItem.addEventListener("click", () => {
        newItem.classList.toggle("completed");
        updateLocalStorage();
    });

    //if the user right click the item
    newItem.addEventListener("contextmenu", (e) => {
        e.preventDefault();     //prevent pop up of context menu when right click
        newItem.remove();       //remove the item
        updateLocalStorage();
    });
    
    toDoList.appendChild(newItem);  //add new item to the list
    input.value = "";   //clear the input text box
    updateLocalStorage();

}

function updateLocalStorage() {
    let items = document.querySelectorAll("form li");
    let list = [];
    items.forEach(item => {
        list.push({
            name: item.innerText,
            completed: item.classList.contains("completed")
        });
    });
    localStorage.setItem("list", JSON.stringify(list));
}


