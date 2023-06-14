const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor (direct = true) {
    this.direct = direct;
  }
  
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error ('Incorrect arguments!')
    }
    message = message.toUpperCase();
    key = key.toUpperCase();
    
    let resultMessage = '';
    let keyIndex = 0;
    const regex = /[A-Z]/g;

    for (let i = 0; i < message.length; i++) {
      if (message[i].match(regex)) {
        const currSymbol = message[i].codePointAt() - 65 ;
        const shift = key[keyIndex % key.length].codePointAt() - 65;
        const newCurrSymbol = (currSymbol + shift) % 26;
        resultMessage += String.fromCodePoint(newCurrSymbol + 65);
        keyIndex++;
      } else {
        resultMessage += message[i];
      }
    }

    if (this.direct) {
      return resultMessage;
    } else {
      return resultMessage.split('').reverse().join('');
    }
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error ('Incorrect arguments!')
    }
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    let resultMessage = '';
    let keyIndex = 0;
    const regex = /[A-Z]/g;

    for (let i = 0; i < encryptedMessage.length; i++) {
      if (encryptedMessage[i].match(regex)) {
        const currSymbol = encryptedMessage[i].codePointAt() - 65;
        const shift = key[keyIndex % key.length].codePointAt() - 65;
        const newCurrSymbol = (currSymbol - shift + 26) % 26;
        resultMessage += String.fromCodePoint(newCurrSymbol + 65);
        keyIndex++;
      } else {
        resultMessage += encryptedMessage[i];
      }
    }

    if (this.direct) {
      return resultMessage;
    } else {
      return resultMessage.split('').reverse().join('');
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
