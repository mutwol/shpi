const UserModel = require('../../schemas/user.schema');

module.exports = {

    /**
     * GET USERS
     */
    index: async(req,res) => {
        try {
            const users = await UserModel.find().exec();
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
            const user = new UserModel({
                ...req.body,
                password: '123'
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


    },

    /**
     * DELETE {{ID}}
     */
    destroy: async (req, res) => {

    }
};