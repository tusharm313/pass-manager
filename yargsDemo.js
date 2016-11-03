var argv = require('yargs').argv;
var command = argv._[0];// _ to read array

console.log(argv);

// if (command === 'hello' && typeof argv.roomname !=='undefined'){
//   console.log('Hello' +argv.roomname);
// }else if(command === 'hello'){
//   console.log('Hello World!');
// }
// run as : node yargsDemo.js hello --roomname Tush

if (command === 'hello' && typeof argv.fn !=='undefined' &&  typeof argv.ln !=='undefined'){
  console.log('Hello' +argv.fn + argv.ln);
}
else if (command === 'hello' && typeof argv.fn !=='undefined'){
  console.log('Hello' +argv.fn);
}
else if(command === 'hello'){
  console.log('Hello World!');
}
