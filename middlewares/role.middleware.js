/**
 * @author mutwol
 */

module.exports = (userRole) => {
    return (req,res,next) => {
        const {currentUser} = req;
        if (currentUser.role === userRole)
            return next();
        else 
            return res.status(401).send({respStatus: false, respMessage: 'Action not allowed !!'});
    };
};