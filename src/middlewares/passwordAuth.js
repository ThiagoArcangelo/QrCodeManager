const Param = require('../models/Params');

let url = '';

const passwordAuth = (req,res, next) => {
    let password = req.body.password;

    if(password = Param.password) {
        res.redirect(url);
    }
            
    next()
    
}

module.exports = passwordAuth;