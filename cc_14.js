// Task 2: Adding Support Tickets Dynamically
function addSupportTicket(customerName, issueDescription, priorityLevel) {

    const ticket = document.createElement('div'); //writing function using createElement to build support ticket
    ticket.setAttribute('class','support-ticket'); //setting attribute
    ticket.setAttribute('id, `ticket-${Date.now()}'); //setting attribute
    const nameHeading = document.createElement('h3');
    nameHeading.textContent = customerName;
    const issueParagraph = document.createElement('p');
    issueParagraph.textContent = issueDescription;
    const priorityLabel = document.createElement('span');
    priorityLabel.textContent = `Priority: ${priorityLevel}`;
    priorityLabel.setAttribute('class', 'priority-label');
    if (priorityLevel.toLowerCase() ==="high"){
        ticket.classList.add ("high-priority");
    }
    const resolveButton = document.createElement('button');
    resolveButton.textContent = "Resolve";
    resolveButton.setAttribute('class','resolve-button');
 
    
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
document.getElementById('addTicket').addEventListener('click', highlightHighPriority); //calling function after adding tickets