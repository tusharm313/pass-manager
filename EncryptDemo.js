var crypto = require('crypto-js');
var secretMessage = {
  name:'Andrew',
  secretName:'008'
}
var secretKey='123abcd';
//Encrytp
var encryptMessage=crypto.AES.encrypt(JSON.stringify(secretMessage),secretKey);
console.log('Encrypted Message ' +encryptMessage);

//Decry
var bytes= crypto.AES.decrypt(encryptMessage,secretKey);
var decryMessage=JSON.parse(bytes.toString(crypto.enc.Utf8));

console.log('Decrypted Message ' +decryMessage.name);
console.log('Decrypted Message2 ' +bytes.toString(crypto.enc.Utf8));
