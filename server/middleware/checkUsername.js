

const checkUsername = (req, res, next)=>{

    const disAllowed = ["abc", "123"];
    const username = req.body.username;

    try {
        if (disAllowed.includes(username)) {
            return res.status(401).json({ "msg": "Username not allowed" })
        }
        next();
    } catch (error) {
        console.log(error);
    }

}

module.exports = checkUsername;