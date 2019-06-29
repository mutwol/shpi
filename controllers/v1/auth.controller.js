/**
 * @author mutwol
 */


const UserModel = require('../../schemas/user.schema');
const argon = require('argon2');
const jwt = require('jsonwebtoken');

module.exports = {
    /**
     * issue user access_token
     * @method
     */
    login: async (req, res) => {
        try {
            const {password, email} = req.body;

            const user = await UserModel.findOne({email: email}).exec();

            if (!user) {
                res.send({respStatus: false, respMessage: 'Invalid user credentials'});
                return;
            } else {

                const isValid = await argon.verify(user.password, password);

                if(!isValid) {
                    res.send({respStatus: false, respMessage: 'Invalid user credentials'});
                    return;
                }
            }

            res.status(200).json(
                {
                    respStatus: true,
                    access_token: generateToken(user),
                    token_type: 'Bearer',
                    refresh_token: '',
                    expires_in: Date.now() / 1000 + 60 * 60,
                    created_at: Date.now()
                });
            
        } catch(error) {
            res.status(401).send({respStatus: false, respMessage: 'there was problem!'});
        }
    },

};

/**
 * generate token
 * @param {*} user 
 */
function generateToken(user) {
    const {email, name} = user;
    const appKey =  process.env.APP_KEY;
    const exp = '1h';

    const data = {
       email,
       name
    };

    return jwt.sign({data}, appKey, {expiresIn: exp});
}