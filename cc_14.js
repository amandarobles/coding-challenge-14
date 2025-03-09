// Task 2: Adding Support Tickets Dynamically
function addSupportTicket(customerName, issueDescription, priorityLevel) {

    const ticket = document.createElement('div'); //writing function using createElement to build support ticket
    ticket.setAttribute('class','support-ticket'); //setting attribute
    ticket.setAttribute('id, `ticket-${Date.now()}'); //setting attribute
    const nameHeading = document.createElement('h3'); //heading for customer name
    nameHeading.textContent = customerName;
    const issueParagraph = document.createElement('p');//paragraph for issue description
    issueParagraph.textContent = issueDescription;
    const priorityLabel = document.createElement('span'); //labeling for priority
    priorityLabel.textContent = `Priority: ${priorityLevel}`;
    priorityLabel.setAttribute('class', 'priority-label');
    if (priorityLevel.toLowerCase() ==="high"){
        ticket.classList.add ("high-priority"); // task 3-adding class for high priority
    }
    const resolveButton = document.createElement('button'); //adding resolve button
    resolveButton.textContent = "Resolve";
    resolveButton.setAttribute('class','resolve-button');
    resolveButton.addEventListener("click", function (event){ //task 4:
        event.stopPropagation(); //preventing event bubbling to container
        ticketContainer.removeChild(ticket); //resolving only specific card
    });
 
    
    ticket.appendChild(nameHeading); //heading for customer's name
    ticket.appendChild(issueDescription); //paragraph for issue description
    ticket.appendChild(priorityLabel); //label indicating priortiy level
    ticket.appendChild(resolveButton); //removing ticket
    ticketContainer.appendChild(ticket); //appending support ticket to "ticketContainer"

}

// Task 3: Converting NodeLists to Arrays for Bulk Updates
function highlightHighPriorityTickets() { //selecting tickets with "High" priority class
    const highPriorityTickets = document.querySelectorAll('.high-priority'); //converting NodeList to an array
    Array.from(highPriorityTickets).forEach(ticket => { //using .forEach to apply styles
        ticket.style.border = "2px solid red";
        ticket.style.backgroundColor = "lightgray";
    });
}
// Task 4: Implementing Ticket Resolution with Event Bubbling 
document.getElementById('ticketContainer').addEventListener("click", function (event){
    if(event.target.classList.contains("support-ticket")){
        console.log("Ticket Has Been Clicked:", event.target); //logging message if ticket is clicked
    } else {
        console.log("Click occurred within the ticket container but outside a ticket."); //logging if click is within container but outside ticket
    }
});