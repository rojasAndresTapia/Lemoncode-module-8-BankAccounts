const DataBusiness = require('./data-business');
const ClientsElements = require('./account-business');

function getClientElement(client) {
  const allAccounts = DataBusiness.getAccounts();
  const clientAccounts = [];
  for (let account of allAccounts) {
    if (account.clientId === client.id) {
      clientAccounts.push(account);
    }
  }

  const node = getClientNode(client);
  const div = ClientsElements.getClientAccountsElement(clientAccounts);

  node.appendChild(div);

  return node;
}

function getClientNode(client) {
  const div = document.createElement('div');
  div.append(getFullName(client));
  div.setAttribute('class', 'clientData');

  return div;
}

function getFullName(client) {
  const paragraph = document.createElement('p');
  paragraph.append(` ${client.first_name} ${client.last_name} `);
  paragraph.setAttribute('class', 'name');
  return paragraph;
}

module.exports = { getClientElement, getClientNode, getFullName };
