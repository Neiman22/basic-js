const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
 function renameFiles(array) {
  const subObj = {};
  const subArr = [];

  for (let name of array) {
    if (name in subObj) {
        let count = subObj[name];
        const newName = `${name}(${count})`;
        subObj[name] += 1;
        subObj[newName] = 1;
        subArr.push(newName);
    } else {
      subObj[name] = 1;
      subArr.push(name);
    }
  }
  return subArr;
}

module.exports = {
  renameFiles
};
