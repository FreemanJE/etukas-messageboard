import User from './models/User.js';
import passportJWT from 'passport-jwt';

const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

const configurePassport = (passport) => {
    passport.use("jwt", new JWTStrategy(
        {
            jwtFromRequest:(req) => {
                console.log("cookies are: ", req.cookies)
                return req.cookies["jwt"];
            },

            secretOrKey:process.env.JWT_SECRET
    },(jwtPayload, done) => {
        return( 
           User.findById(jwtPayload.sub)
               .select("_id firstname lastname username ip avatar message")
               .then((user)=> {
                return done(null,user)
               })
               .catch((err) => {
                return done(err)
               })
        )
    }))
}

export default configurePassport;