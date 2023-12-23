const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    // If value is not provided, use '( null )' as the default value
    const link = `( ${value !== undefined ? value : 'null'} )`;
    this.chain.push(link);
    return this; // Return the chainMaker object for chaining
  },
  removeLink(position) {
    if (
      typeof position !== 'number' ||
      position <= 0 ||
      position > this.chain.length ||
      !Number.isInteger(position)
    ) {
      this.chain = []; // Reset the chain if an incorrect link is attempted to be removed
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    const result = this.chain.join('~~');
    this.chain = [];
    return result;
  },
};

module.exports = {
  chainMaker,
};

module.exports = {
  chainMaker
};
