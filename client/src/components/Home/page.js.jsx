import React from "react";
import ReactDom from "react-dom";
import {encrypt, decrypt} from '../../actions/securityActions';

class Home extends React.Component {
  render() {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const text = `THEREARETWOWAYSOFCONSTRUCTINGASOFTWAREDESIGNONEWAYISTOMAKEITSOSIMPLETHATTHEREAREOBVIOUSLYNODEFICIENCIESANDTHEOTHERWAYISTOMAKEITSOCOMPLICATEDTHATTHEREARENOOBVIOUSDEFICIENCIESTHEFIRSTMETHODISFARMOREDIFFICULT`;
    const key = 'SYSTEM';
    const rightCipher = `LFWKIMJCLPSISWKHJOGLKMVGURAGKMKMXMAMJCVXWUYLGGIISWALXAEYCXMFKMKBQBDCLAEFLFWKIMJCGUZUGSKECZGBWYMOACFVMQKYFWXTWMLAIDOYQBWFGKSDIULQGVSYHJAVEFWBLAEFLFWKIMJCFHSNNGGNWPWDAVMQFAAXWFZCXBVELKWMLAVGKYEDEMJXHUXDAVYXL`
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
    const repetitions = this.findRepetitions(encryptedText);
    const filteredRepetitions = this.filterRepetitions(repetitions);
    const shifts = this.findShifts(filteredRepetitions);
    const shiftsCount = this.getShiftCount(shifts);
    const keyLength = this.geKeyLength(shiftsCount);
    debugger;
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

    return decryptedText;
  }

  findRepetitions(text) {
    debugger;
    let repetitions = {};
    for(let i = 3; i < 7; i++ ) {
      let lengthOfRepetition = i;
      for (let j = 0; j < text.length - lengthOfRepetition; j++) {
        let searchString = text.substring(j, j + lengthOfRepetition);
        if (repetitions[searchString]) {
          continue;
        }
        for (let k = j + lengthOfRepetition; k < text.length; k++) {
          let checkedForRepetitionString = text.substring(k, k + lengthOfRepetition);
            if (checkedForRepetitionString === searchString) {
              this.setRepetition(repetitions, searchString, j, k);    
            }  
        }
      }  
    }
    return repetitions;  
  }

  setRepetition(repetitions, str, indexOfFirstOccurence, indexOfOccurence) {
    if (!repetitions[str]) {
      repetitions[str] = [];
      repetitions[str].push(indexOfFirstOccurence);
    }
    repetitions[str].push(indexOfOccurence);
  }

  findShifts(repetitions) {
    let shifts = {};
    for (let key in repetitions) {
      shifts[key] = this.getDifferences(repetitions[key]);
    }
    return shifts;
  }

  getDifferences(array) {
    let differences = [];
    for (let i = 0; i < array.length - 1; i++) {
      differences.push(array[i + 1] - array[i]);
    } 
    return differences;
  }

  getShiftCount(shifts) {
    let shiftCounter = {};
    for (let key in shifts) {
      shifts[key].forEach((shift) => {
        if (!shiftCounter[shift]) {
          shiftCounter[shift] = 0;
        }
        shiftCounter[shift]++;    
      });  
    }
    return shiftCounter;
  }

  geKeyLength(shiftCounter) {
    const keyLength = Object.keys(shiftCounter).reduce((prevValue, currentValue) => this.getGCD(prevValue, currentValue));
    return keyLength;
  }

  getGCD (first, second) {
    if (!second) {
        return first;
    }
    return this.getGCD(second, first % second);
  }


  filterRepetitions (repetitions) {
    let filteredRepetitions = {};
    for (let key in repetitions) {
      if (repetitions[key].length > 2) {
        filteredRepetitions[key] = repetitions[key];
      }
    }
    return filteredRepetitions;
  }



  
    


}

export default Home;