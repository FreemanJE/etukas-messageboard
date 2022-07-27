import jwt from 'jsonwebtoken'

/**
 * Generates the token based on a user.
 * @param {*} user 
 */
 const issueToken = (user) => {
    const payload = {sub: user._id, iat: Date.now()};

    return new Promise((resolve, reject) => {
        jwt.sign(payload, 
            process.env.JWT_SECRET,
            {expiresIn:"1h"},
            (err, token) => {
            if(err){
                reject(err);
                return;
            }

            resolve(token);
        })
    });
}

export default {issueToken}