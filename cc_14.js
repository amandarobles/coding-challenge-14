// Task 2: Adding Support Tickets Dynamically
function addSupportTicket(customerName, issueDescription, priorityLevel) { //adding function that adds employee card dynamically

    const ticket = document.createElement("div"); //writing function using createElement to build support ticket
    ticket.setAttribute("class","support-ticket"); //setting attribute
    const nameHeading = document.createElement("h3"); //heading for customer name
    nameHeading.textContent = customerName;
    const issueParagraph = document.createElement("p");//paragraph for issue description
    issueParagraph.textContent = issueDescription;
    const priorityLabel = document.createElement("span"); //labeling for priority
    priorityLabel.textContent = `Priority: ${priorityLevel}`;
    priorityLabel.setAttribute("class", "priority-label");
    if (priorityLevel.toLowerCase() ==="high"){
        ticket.classList.add ("high-priority"); // task 3-adding class for high priority
    }
    const resolveButton = document.createElement("button"); //adding resolve button
    resolveButton.textContent = "Resolve";
    resolveButton.setAttribute("class","resolve-button");
    resolveButton.addEventListener("click", function (event){ //task 4:
        event.stopPropagation(); //preventing event bubbling to container
        ticketContainer.removeChild(ticket); //resolving only specific card
    });
    ticket.addEventListener("dblclick", function (){ //task 5: enabling editing by double-clicking
        enableEditing(ticket, nameHeading, issueParagraph, priorityLabel);
    });
    ticket.appendChild(nameHeading); //heading for customer's name
    ticket.appendChild(issueParagraph); //paragraph for issue description
    ticket.appendChild(priorityLabel); //label indicating priortiy level
    ticket.appendChild(resolveButton); //removing ticket
    ticketContainer.appendChild(ticket); //appending support ticket to "ticketContainer"

}

// Task 3: Converting NodeLists to Arrays for Bulk Updates
function highlightHighPriorityTickets() { //selecting tickets with "High" priority class
    const highPriorityTickets = document.querySelectorAll(".high-priority"); //converting NodeList to an array
    Array.from(highPriorityTickets).forEach(ticket => { //using .forEach to apply styles
        ticket.style.backgroundColor = "lightgray";
    });
}
// Task 4: Implementing Ticket Resolution with Event Bubbling 
document.getElementById("ticketContainer").addEventListener("click", function (event){
    if(event.target.classList.contains("support-ticket")){
        console.log("Ticket Has Been Clicked:", event.target); //logging message if ticket is clicked
    } else {
        console.log("Click occurred within the ticket container but outside a ticket."); //logging if click is within container but outside ticket
    }
});

// Task 5: Additional Challenge- Inline Editing of Support Tickets
function enableEditing(ticket, nameElement, issueElement, priorityElement) {
    const nameInput = document.createElement ("input"); //editing name
    nameInput.type = "text";
    nameInput.value = nameElement.textContent;

    const issueInput = document.createElement("input"); //editing issue
    issueInput.type = "text";
    issueInput.value = issueElement.textContent;

    const priorityInput = document.createElement("input"); //editing priority level
    priorityInput.type ="text"
    priorityInput.value = priorityElement.textContent;

    const saveButton = document.createElement("button"); //adding save button that updates ticket with new values
    saveButton.textContent = "Save";
    saveButton.classList.add("save-btn");

    ticket.innerHTML = ""; //pre-populating input fields with existing elements
    ticket.appendChild(nameInput);
    ticket.appendChild(issueInput);
    ticket.appendChild(priorityInput);
    ticket.appendChild(saveButton);

    saveButton.addEventListener("click", function () {
        nameElement.textContent = nameInput.value;
        issueElement.textContent = issueInput.value;
        priorityElement.textContent = priorityInput.value;

        ticket.innerHTML = "";
        ticket.appendChild(nameElement);
        ticket.appendChild(issueElement);
        ticket.appendChild(priorityElement);
        ticket.appendChild(resolveButton);
    });
}
//test data
addSupportTicket("Juan Ochoa", "Unable to reset password", "High"); //adding first customer
addSupportTicket("Alex Copeland", "Error displayed on dashboard", "Medium"); //adding second customer
addSupportTicket("Liam Johnson", "Delayed loading time", "Low"); //adding third customer

highlightHighPriorityTickets(); //adding highlight to priority tickets