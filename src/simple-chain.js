const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  arrayChain: [],

  getLength() {
    return this.arrayChain.length;
  },

  addLink(value) {
    const link = value !== undefined ? value : '';
    this.arrayChain.push(link);
    return this;
  },

  removeLink(position) {
    if (
      position < 1 ||
      typeof position !== 'number' ||
      position > this.arrayChain.length
    ) {
      this.arrayChain = [];
      throw new Error("You can't remove incorrect link!");
    } else {
      this.arrayChain.splice(position - 1, 1);
      return this;
    }

  },

  reverseChain() {
    this.arrayChain.reverse();
    return this;
  },

  finishChain() {
    let resultArray = [];
    for (let i = 0; i < this.arrayChain.length; i++) {
      resultArray.push(`( ${this.arrayChain[i]} )`);
    }
    this.arrayChain = [];
    return resultArray.join('~~');
  }
};

module.exports = {
  chainMaker
};
