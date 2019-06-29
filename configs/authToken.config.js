/**
 * @author mutwol
 */

/**
 * get user token from headers
 * {{token}}
 */
module.exports = {
    userToken: (req, res, next) => {
        const bearerToken = req.headers['authorization'];

        if(bearerToken) {
            const token = bearerToken
                                    .split(' ')
                                    .find((item, i) => i == 1);
            req.token = token;
            next();
        } else {
           res.status(403).send({respStatus: false, respMessage: 'access denied!!'});
        }
    }
}