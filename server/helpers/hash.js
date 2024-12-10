const bcrypt = require('bcryptjs')

const hashPass = (pass) => {
    const salt = bcrypt.genSaltSync(10);
    let result = bcrypt.hashSync(pass, salt);
    return result;
}

const comparePass = (pass, hashed) => {
    let result = bcrypt.compareSync(pass, hashed);
    return result;
}

module.exports = {hashPass, comparePass}