function getNodeStyle(account) {
  if (account.money < 0) {
    return 'color: #ff9068';
  }

  return 'color: #72A0C1';
}

module.exports = { getNodeStyle };
