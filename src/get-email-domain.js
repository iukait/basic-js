const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const symbolToFind = "@";
  const indexOfSymbol = email.lastIndexOf(symbolToFind);
  return email.substring(indexOfSymbol + 1);
}

module.exports = {
  getEmailDomain
};
