const cp = require('node:child_process');

cp.exec('./malicious', (err, stdout, stderr) => {
    if(err){ console.log(err); }
});
