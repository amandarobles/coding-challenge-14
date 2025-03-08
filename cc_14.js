// Task 2: Adding Support Tickets Dynamically
document.getElementById('addTicket').addEventListener('click', addTicket);
function addTicket() {
    const ticketContainer = document.getElementById('ticketContainer'); 
    const ticket = document.createElement('div'); //writing function using createElement to build support ticket
    ticket.setAttribute('class','ticket'); //setting attribute
    ticket.setAttribute('id, `ticket-${Date.now()}'); //setting attribute
    const customerName = document.createElement('h3');
    customerName.textContent = "John Doe";
    const issueDescription = document.createElement('p');
    issueDescription.textContent = "Internet not working";
    const priority = document.createElement('span');
    priority.textContent = "Priority: High";
    priority.classList.add('high-priority');
    const resolveButton = document.createElement('button');
    resolveButton.textContent = "Resolve";
    resolveButton.setAttribute('class','resolve-btn');
    ticket.appendChild(customerName); //heading for customer's name
    ticket.appendChild(issueDescription); //paragraph for issue description
    ticket.appendChild(priority); //label indicating priortiy level
    ticket.appendChild(resolveButton); //removing ticket
    ticketContainer.appendChild(ticket); //appending support ticket to "ticketContainer"

}