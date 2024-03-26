import User from '../models/user.model.js';

//Get Users
export const getUsersForSidebar = async (req, res) => {
    try {
        const loggedInUserId = req.user._id; // we can get this thanks to protectRoute middleware
        const filteredUsers = await User.find({_id: { $ne: loggedInUserId }}).select("-password"); //find all users without their password but current loggedInUser(you);

        res.status(200).json(filteredUsers);

    } catch (error) {
        console.error("Error in getUserForSidebar controller: ", error.message);
        res.status(500).json({error: "Internal server error"});
    }
};