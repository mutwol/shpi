/**
 * @author mutwol
 */

const jwt = require('express-jwt');

/**
 * Get Token From Request Headers
 * @param {*} req 
 */
const getHeaderToken =  (req) => {
    console.log(req.headers);
    const {authorization} = req.headers;
    if(authorization && authorization.split(' ')[0] === 'Bearer') {
        return authorization.split(' ')[1];
    }
};

console.log('key', process.env.APP_KEY); 

module.exports = jwt({
    secret: process.env.APP_KEY,
    userProperty: 'token',
    getToken: getHeaderToken
});