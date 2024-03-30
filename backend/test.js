var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);
var hash = bcrypt.hashSync("ashi", salt);
var hash2 = bcrypt.hashSync("ashi", salt);

console.log(hash);
console.log(hash2);