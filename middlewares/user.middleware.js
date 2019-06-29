/**
 * @author mutwol
 */

const UserSchema = require('../schemas/user.schema');

module.exports =  async (req, res, next) => {
  try {
    const {email} = req.token.data;
    console.log(' token %%%', req.token);
    const user = await UserSchema.findOne({ email: email });
    if (!user) {
      return res.status(401).end();
    }
    req.currentUser = user;
    return next();
  } catch(e) {
    return res.json(e).status(500);
  }
};
