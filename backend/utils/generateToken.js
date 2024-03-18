import jwt from 'jsonwebtoken';//jsonwebtoken is a popular library in the Node.js ecosystem for implementing JWT authentication. Securely transmitting information between parties.

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: '15d'
    })
    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000,//ms
        httpOnly: true, // prevents XSS attacks, cross-site scripting attacks
        sameSite: "strict", // CSRF attacks, cross-site request forgery attacks
        secure: process.env.NODE_ENV !== "development",
    });
};

export default generateTokenAndSetCookie;