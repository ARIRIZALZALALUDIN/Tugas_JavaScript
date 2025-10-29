const os = require('os');
console.log("Nama User :", os.userInfo().username);
console.log("Platform  :", os.platform());
console.log("Total Memori :", os.totalmem());

const url = require('url');
let alamat = 'https://www.example.com/search?keyword=nodejs';
let parsed = url.parse(alamat, true);
console.log("Kata kunci pencarian :", parsed.query.keyword);
