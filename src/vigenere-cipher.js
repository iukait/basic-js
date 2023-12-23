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
  constructor(isDirect = true) {
    this.isDirect = isDirect;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  processText(text, key, encrypt = true) {
    if (!text || !key) {
      throw new Error('Invalid input. Please provide text and key.');
    }

    text = text.toUpperCase();
    key = key.toUpperCase();

    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < text.length; i++) {
      const char = text[i];

      if (this.alphabet.indexOf(char) === -1) {
        result += char;
        continue;
      }

      const keyChar = key[keyIndex % key.length];
      const keyShift = this.alphabet.indexOf(keyChar);
      const shift = encrypt ? keyShift : -keyShift + this.alphabet.length;

      const charIndex = this.alphabet.indexOf(char);
      const encryptedCharIndex = (charIndex + shift + this.alphabet.length) % this.alphabet.length;

      const encryptedChar = this.alphabet[encryptedCharIndex];
      result += encryptedChar;

      keyIndex++;
    }

    return this.isDirect ? result : result.split('').reverse().join('');
  }

  encrypt(text, key) {
    if (arguments.length !== 2 || !text || !key) {
      throw new Error('Invalid input. Please provide text and key.');
    }
    return this.processText(text, key, true);
  }

  decrypt(text, key) {
    if (arguments.length !== 2 || !text || !key) {
      throw new Error('Invalid input. Please provide text and key.');
    }
    return this.processText(text, key, false);
  }
}

module.exports = {
  VigenereCipheringMachine
};
