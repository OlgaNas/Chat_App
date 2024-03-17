import bcrypt from 'bcryptjs';
import User from '../models/user.model.js';

//SIGN UP USER
//----------------------------------------------------------------------------------------------------------------------------------------------------

export const signup = async (req, res) => {
    try {
        const {fullName, username, password, confirmPassword, gender} = req.body;

        if(password !== confirmPassword){
            return res.status(400).json({error:"Passwords don't match"})
        }

        const user = await User.findOne({username});

        if(user) {
            return res.status(400).json({error: "Username already exists"});
        }

        //HASH PASSWORD
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);


        //Generate random profile pictures
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy/?username=${username}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl/?username=${username}`

        const newUser = new User ({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        })

        if(newUser) {
            //Generate JWT token


            
            await newUser.save(); //save to the database;
            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilePic: newUser.profilePic
            });
        } else {
            res.status(400).json({error: "Invalid user data"});
        }


    } catch (error) {
        console.log("Error in signup controller", error.message);
        res.status(500).json({error: "Internal Server Error"});
    }
}

//LOGIN USER
//----------------------------------------------------------------------------------------------------------------------------------------------------

export const login = (req, res) => {
    res.send("Login User");
    console.log("loginUser");
}

//LOGOUT USER
//----------------------------------------------------------------------------------------------------------------------------------------------------

export const logout = (req, res) => {
    console.log("logoutUser");
}

