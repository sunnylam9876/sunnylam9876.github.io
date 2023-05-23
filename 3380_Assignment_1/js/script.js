let contactList = document.querySelector(".contact-list");
let numberOfContact = users.length;   //number of contact

let pagination = document.querySelector(".pagination");
const paginationLimit = 10; //max number of contact per page = 10
const pageCount = Math.ceil(numberOfContact / paginationLimit);   //calcualte the number of page



window.addEventListener("load", () => {
    loadContact();
    appendPageNumber(pageCount);
    setCurrentPage(1);
    document.getElementById("numberOfContacts").innerText = "Total: " + numberOfContact;    //display the number of contact on the webpage

    let allPages = document.querySelectorAll(".pagination li a");   
    allPages.forEach((item, index) => {
        item.addEventListener("click", () => {      //to detect which page number is clicked
            setCurrentPage(index + 1);
        })
    })
})



//display the contact list
function loadContact() {
    for (let i = 0; i < numberOfContact; i++) {
        let contact = document.createElement("li"); //create a contact using <li>
        contact.classList.add("contact-item");  //add classname
        contact.classList.add("cf");
        contactList.appendChild(contact);   //append the <li> to <ul> class "contact-list"

        let contactDetails = document.createElement("div"); //create a div
        contactDetails.classList.add("contact-details");    //add classname
        contact.appendChild(contactDetails);    //append the <div> to <li>

        let contactImg = document.createElement("img"); //create a img for the contact
        contactImg.classList.add("avatar"); //add class name to <img>
        contactImg.src = users[i].image;    //set the link of the img
        contactDetails.appendChild(contactImg); //append the image to the <div>

        let contactName = document.createElement("h3"); //create <h3> for the contact name
        contactName.innerText = users[i].name;  //add the contact name
        contactDetails.appendChild(contactName);    //append the contact name to the <div>

        let contactEmail = document.createElement("span");  //create <span> for the contact email
        contactEmail.classList.add("email");    //add class name to the <span>
        contactEmail.innerText = convertToEmail(users[i].name);      //add the email
        contactDetails.append(contactEmail);    //append the email to the <div>

        let joinedDetailsDiv = document.createElement("div");  //create <div> for the joined date
        joinedDetailsDiv.classList.add("joined-details");  //add class name to the div
        contact.appendChild(joinedDetailsDiv); //append the <div> to <li>
        let joinedDate = document.createElement("span");    //create <span> for the joined date
        joinedDate.classList.add("date");   //add class name to the span
        joinedDate.innerText = users[i].joined; //add the joined date
        joinedDetailsDiv.appendChild(joinedDate);   //append the joined date to the div
    }

}

//add page number at the bottom
function appendPageNumber(pageCount) {
    for (let i = 1; i <= pageCount; i++) {
        let pageNumber = document.createElement("li");
        pageNumber.innerHTML = "<a href=#>" + i + "</a>";
        pagination.appendChild(pageNumber);
    }
}

//to display the contact of the selected pages
function setCurrentPage(pageNum) {
    const prevRange = (pageNum - 1) * paginationLimit;  //the last page of previous range
    const currRange = pageNum * paginationLimit;    //the last page of current range
    let allContact = document.querySelectorAll(".contact-item");    //select all the contacts
    allContact.forEach((item, index) => {   
        item.classList.add("hidden");   //set all the contacts to hidden first
        if (index >= prevRange && index < currRange) {
            item.classList.remove("hidden");        //display the contacts in this page
        }
    })

    let allPages = document.querySelectorAll(".pagination li a");
    allPages.forEach((item, index) => {
        item.classList.remove("active");        //remove the color of all the page numbers

        if (index == pageNum - 1) {
            item.classList.add("active");       //set the color of the selected page number (this part not finished)
        }
    })
}

//to output email address from first name and last name
function convertToEmail(name) {
    let result = name.replace(" ", ".") + "@example.com";
    return result;
}
