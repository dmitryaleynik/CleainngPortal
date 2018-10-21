
const initialState  = { 
  initialText: 'Text Example',
  encryptedText: 'ccc',
  decryptedText: 'Text Example',
}

export default (state = initialState, action) => {
  const {type} = action;
  switch (type) {
    case 'Encryption':
      return {
        ...state,
        encryptedText: action.encryptedText,
      };
    
    case 'Decryption':
      return {
        ...state,
        decryptedText: action.decryptedText,
      }
    default:
      return state;
  }
}