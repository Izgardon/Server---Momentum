## Middleware
const jwt = require("jsonwebtoken");

const config = process.env;

const verifyToken = (req, res, next) => {
    const token = 
        req.body.token || req.query.token || req.headers["x-access-token"];
    
    if (!token) {
        return res.status(403).send("A token is required for authentication");
    }
    try {
        const decoded = jwt.verify(token, config.TOKEN_KEY);
        req.user = decoded;
    } catch (err) {
        return res.status(401).send("Invalid Token");
    }
    return next();
};

module.exports = verifyToken;

## Model

token: {
    type: String,
  },

## auth.js login
  const token = jwt.sign(
        { user_id: user.username },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );

      user.token = token;

## auth.js register
const token = jwt.sign(
      { user_id: user.username },
      process.env.TOKEN_KEY,
      {
        expiresIn: "2h"
      }
    );
    //save user token
    user.token = token;

