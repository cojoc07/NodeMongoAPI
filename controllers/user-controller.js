const User = require('../models/user-model')

getUsers = async (req, res) => {
    await User.find({}, (err, users) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!users.length) {
            return res
                .status(404)
                .json({success: false, error: 'No users found'})
        }

        return res.status(200).json({success: true, data: users})
    }).catch(err => console.log(err))
}

module.exports = {
    getUsers
}