import bcrypt from 'bcryptjs'; //a JavaScript library used for hashing passwords.
import User from '../models/user.model.js';
import generateTokenAndSetCookie from '../utils/generateToken.js';

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
            generateTokenAndSetCookie(newUser._id, res);
            //Save user to the database;
            await newUser.save(); 
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
export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        const isPasswordCorrect = await bcrypt.compare(password, user.password || "");

        if(!user || !isPasswordCorrect) {
            return res.status(400).json({error: "Invalid username or password"});
        }

        generateTokenAndSetCookie(user._id, res);

        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            profilePic: user.profilePic
        });

    } catch (error) {
        console.log("Error in login controller", error.message);
        res.status(500).json({error: "Internal Server Error"});
    }
} 


//LOGOUT USER
//----------------------------------------------------------------------------------------------------------------------------------------------------

export const logout = (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 });//Clearing a user's session or authentication token stored in the "jwt" cookie.
        res.status(200).json({ message: "Logged out successfully" });
       
    } catch (error) {
        console.log("Error in logout controller", error.message);
        res.status(500).json({error: "Internal Server Error"});
    }
}
