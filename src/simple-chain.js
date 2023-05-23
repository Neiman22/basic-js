const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  arrayChain: [],

  getLength() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },

  addLink(value) {
    this.arrayChain.push(value);
  },

  removeLink(/* position */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },

  reverseChain() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },

  finishChain() {
    let resultArray = [];
    for (let i = 0; i < this.arrayChain.length; i++) {
      resultArray.push(`( ${this.arrayChain[i]} )`);
    }
    return resultArray.join('~~');
  }
};

module.exports = {
  chainMaker
};
