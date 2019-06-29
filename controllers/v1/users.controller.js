/**
 * @author mutwol
 */

const UserModel = require('../../schemas/user.schema');
const argon2 = require('argon2');
module.exports = {

    /**
     * GET USERS
     */
    index: async(req,res) => {
        try {
            const users = await UserModel
                                        .find({password: 0})
                                        .select(['-password'])
                                        .exec();
            res.send({respStatus: true, data: users});
        } catch( error) {
            res.status(500).json(error);
        }
    },

    /**
     * CREATE
     */
    create: async (req, res) => {

    },

    /**
     * ADD USER
     */
    store: async (req, res) => {
        try {
            const {password} = req.body;
            const hashedPassword = await argon2.hash(password);
            const user = new UserModel({
                ...req.body,
                activate_token: Math.random().toString(36),
                password: hashedPassword
            });
            
            const result = await user.save();
            res.status(201).json({respStatus: true, data: result});
        } catch (error) {
            res.status(500).send(error);
        }
    },

    /**
     * GET {{USER}}
     */
    show: async (req, res) => {
        try {
            const {id} = req.params;

            const result = await UserModel.findById({_id: id});

            res.send({respStatus: true, data: result});

        } catch (error) {
            res.status(401).send(error);
        }
    },

    /**
     * EDIT
     */
    edit: async (req, res) => {

    },

    /**
     * PUT/PATCH {{ID}}
     */
    update: async (req, res) => {
        try {
            const { id } = req.params;

            const user = req.body;
            
            const result = await UserModel
                                            .findOneAndUpdate({_id: id}, user)
                                            .select(['-password']); 

            res.send({respStatus: true, respMessage: 'user updated successfully!', data: result});
        } catch(error) {
            res.status(401).send(error);
        }
    },

    /**
     * DELETE {{ID}}
     * danger zone 😠!!
     * don't delete data !!
     */
    destroy: async (req, res) => {
        try {
            const {id} = req.params;
            const result = await UserModel.remove({_id: id});
            res.send({respStatus: true, respMessage: 'user deleted successfully!!', data: result});
        } catch (error) {
            res.status(401).send(error);
        }
    },

    /**
     * Verify User
     */
    verify: async (req, res) => {
        try {
            const {token} = req.params;
            const {email} = req.body;
            const user = await UserModel.findOne({email: email});
            const {activate_token} = user;

            if(token === activate_token) {
                const usr = {
                    active: true,
                    activate_token: 'confirmed',
                    updated_at: new Date()
                };
                const verified = await UserModel
                                                .findOneAndUpdate({email: email}, usr)
                                                .select(['-password']);
                return res.send({respStatus: true, respMessage: 'User activated successfully!', data: {email: verified.email}});
            } else {
                res.send({respStatus: false, respMessage: 'Invalid verification token!!'});
            }

        } catch (error) {
            res.status(401).send(error);
        }
    }
};