var UserModel = require('../../schemas/user.schema');
module.exports = {
    /**
     * AUTH USER
     */
    login: async (req, res) => {
        try {
            const {password, email} = req.body;
            const user = await UserModel.findOne({email: email}).exec();
    
            if(!user) {
                res.status(400).send({respStatus: false, respMessage: 'invalid user credentials'});
            }
            user.verifyPassword(password, (error, match) => {
                if(!match) {
                    res.status(400).send({respStatus: false, respMessage: 'invalid user credentials, kindly verify'});
                }
            });
            res.status(200).send({respStatus: true, respMessage: 'user logged in successfully'});
        } catch(error) {
            res.status(401).send({respStatus: false, respMessage: 'there was problem!'});
        }
    }
};