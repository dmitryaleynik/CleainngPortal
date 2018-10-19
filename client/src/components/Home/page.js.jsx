import React from "react";
import ReactDom from "react-dom";
import {encrypt, decrypt} from '../../actions/securityActions';

class Home extends React.Component {
  render() {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const text = 'ATTACKATDAWN';
    const key = 'LEMONLEMONLE';

    const encryptedText = this.encrypt(
      alphabet,
      text,
      key,
    );
    const decryptedText = this.decrypt(
      alphabet,
      encryptedText,
      key, 
    )
  return (
    <div>
      <h1>
        Vigenère cipher:
      </h1>
      <div>Initial Text - {text}</div>
      <div>Encrypted Text - {encryptedText}</div>
      <div>Decrypted Text - {decryptedText}</div>
    </div>);
    
  }

  encrypt(alphabet, text, key) {
    let encryptedText = '';
    const keyWordLength = key.length;
    const alphLength = alphabet.length;

    text.split('').forEach((char, i, text) => {
      const alphPositionOfTextChar = alphabet.indexOf(char);
      const alphPositionOfKeyChar = alphabet.indexOf(key[i % keyWordLength]);
      const alphPositionOfEncryptedChar = (alphPositionOfTextChar + alphPositionOfKeyChar) % alphLength;
      const encryptedChar = alphabet[alphPositionOfEncryptedChar]
      encryptedText += encryptedChar;
    }); 
    alert(encryptedText);

    return encryptedText;
  }

  decrypt(alphabet, text, key) {
    const alphLength = alphabet.length;
    const textLength = text.length;
    const keyWordLength = key.length;

    let decryptedText = '';

    text.split('').forEach((char, i, text) => {
      const alphPositionOfTextChar = alphabet.indexOf(char);
      const alphPositionOfKeyChar = alphabet.indexOf(key[i % keyWordLength]);
      const shift = alphPositionOfTextChar - alphPositionOfKeyChar;
      const alphPositionOfDecryptedChar = shift < 0 ? shift + alphLength : shift % alphLength;
      const decryptedChar = alphabet[alphPositionOfDecryptedChar];
      decryptedText += decryptedChar; 
    });

    alert(decryptedText);

    return decryptedText;

  }
}

export default Home;
