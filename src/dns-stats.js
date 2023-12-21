const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

function getDNSStats(domains) {
  const stats = {};

  domains.forEach((domain) => {
    const domainLevels = domain.split('.').reverse();
    let currentDomain = '';

    domainLevels.forEach((i) => {
      currentDomain = `${i}.${currentDomain}`;
      if (stats[currentDomain]) {
        stats[currentDomain] += 1;
      } else {
        stats[currentDomain] = 1;
      }
    });
  });

  // Reverse the keys in the stats object
  const reversedStats = {};
  Object.keys(stats).forEach((key) => {
    reversedStats[key.split('.').reverse().join('.')] = stats[key];
  });

  return reversedStats;
}
console.log(getDNSStats([
  'code.yandex.ru',
  'music.yandex.ru',
  'yandex.ru'
]
));


module.exports = {
  getDNSStats
};
