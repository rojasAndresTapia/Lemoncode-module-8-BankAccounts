const Clients = require('./data-business');
const ClientBusiness = require('./client-business');

function printClientsAccounts() {
  const clients = Clients.getClients();
  const div = document.createElement('div');
  div.setAttribute('class', 'container');
  for (let client of clients) {
    const element = ClientBusiness.getClientElement(client);
    div.appendChild(element);
  }

  document.getElementById('root').appendChild(div);
}

module.exports = { printClientsAccounts };
