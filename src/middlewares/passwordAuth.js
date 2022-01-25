

const passwordAuth = (req,res, next) => {
    const password = req.body.password;


    
    next()
    
}

module.exports = passwordAuth;