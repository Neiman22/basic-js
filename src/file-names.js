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
  const newSubObj = (name, count) => `${name}(${count})`;

  for (let i = 0; i < array.length; i++) {
    if (array[i] in subObj) {
      if (subObj[array[i]] === 1) {
        subObj[array[i]] += 1;
        let newName = newSubObj(array[i], 1);
        subObj[newName] = 1;
        subArr.push(newName);
      } else {
        subObj[array[i]] += 1;
        let newName = newSubObj(array[i], subObj[array[i]] - 1);
        subArr.push(newName);
      }
    } else {
      subObj[array[i]] = 1;
      subArr.push(array[i]);
    }
  }
  return subArr;
}

// Example usage
const names = ["file", "file", "image", "file(1)", "file"];
const renamedNames = renameFiles(names);
console.log(renamedNames); // ["file", "file(1)", "image", "file(1)(1)", "file(2)"]


module.exports = {
  renameFiles
};
