const fs = require('fs');

const users = require('./db.json')

console.log("-------------- CHECK --------------");

function check(field, value) {
  for (var i = 0; i < users.length; i++) {
    if (users[i][field] === value) {
      console.log(`field ${field} for value ${value} exist`);
      return true
    } else {
      console.log(`field ${field} for value ${value} doesnt exist`);
      return false
    }
  }
}

check('user', 'flavien')
check('user', 'aaa')
check('password', 'aaaa')

console.log("-------------- CHECK USER --------------");

function checkUser(username) {
  let valid = users.some(item => item.user === username);
  if (valid) {
    console.log(`username ${username} exist`);
  } else {
    console.log(`username ${username} doesnt exist`);
  }
}

checkUser('ablo')
checkUser('pomme')

console.log("-------------- CHECK PASS --------------");

function checkPass(user, pass) {
  let valid = users.some(item => item.user === user);
  if (valid) {
    index = users.findIndex(x => x.password == pass);
    if (index !== -1) {
      console.log(`password for ${user} is right`);
    } else {
      console.log(`password for ${user} is wrong`);
    }
  } else {
    console.log(`username ${user} doesnt exist`);
  }
}

checkPass('ablo', 'eeee')
checkPass('flavien', 'aaaa')

console.log("-------------- LIST --------------");

function list(user, cwd) {
if (cwd){}else {cwd = ""}
  const files = fs.readdirSync(`./server/share/${user}/${cwd}`)
  files.forEach(file => { console.log(file) });
}

list('ablo')
list('flavien')
list('flavien', 'file')
