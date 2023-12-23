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
    if ((!text || !keyword)) {
      throw new Error('Both text and keyword are required');
    }
    this.isDirect = isDirect;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  processText(text, keyword, encrypt) {
    if (!text || !keyword) {
      throw new Error('Both text and keyword are required');
    }

    text = text.toUpperCase();
    keyword = keyword.toUpperCase();
    let result = '';
    let keywordIndex = 0;

    for (let i = 0; i < text.length; i++) {
      const char = text[i];

      if (this.alphabet.indexOf(char) === -1) {
        // If the character is not in the alphabet, keep it unchanged
        result += char;
      } else {
        const keywordChar = keyword[keywordIndex % keyword.length];
        const keywordIndexInAlphabet = this.alphabet.indexOf(keywordChar);
        const shift = encrypt ? keywordIndexInAlphabet : -keywordIndexInAlphabet;
        const newIndex = (this.alphabet.indexOf(char) + shift + 26) % 26;

        result += this.alphabet[newIndex];
        keywordIndex++;
      }
    }

    return this.isDirect ? result : result.split('').reverse().join('');
  }

  encrypt(text, keyword) {
    return this.processText(text, keyword, true);
  }

  decrypt(text, keyword) {
    return this.processText(text, keyword, false);
  }
}

module.exports = {
  VigenereCipheringMachine
};
