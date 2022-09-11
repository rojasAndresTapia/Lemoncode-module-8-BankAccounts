const Styles = require('./styles-business');
function getClientAccountsElement(accounts) {
  const span = document.createElement('span');
  for (let account of accounts) {
    span.append(getAccountElement(account));
    span.setAttribute('class', 'dataBox');
  }
  return span;
}

function getAccountElement(account) {
  const span = document.createElement('span');
  const money = document.createElement('span');
  const ibanNumber = document.createElement('span');
  const saldo = document.createElement('span');
  const iban = document.createElement('span');

  span.style = Styles.getNodeStyle(account);
  saldo.append(` SALDO`);
  iban.append(` IBAN`);
  money.append(`${account.money} €`);
  ibanNumber.append(` ${account.iban} `);

  span.appendChild(iban);
  span.appendChild(ibanNumber);
  span.appendChild(saldo);
  span.appendChild(money);

  iban.setAttribute('class', 'iban');
  money.setAttribute('class', 'money');
  ibanNumber.setAttribute('class', 'ibanNumber');
  saldo.setAttribute('class', 'saldo');
  span.setAttribute('class', 'data');
  return span;
}

module.exports = { getClientAccountsElement, getAccountElement };
