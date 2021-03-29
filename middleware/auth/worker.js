let passport = require("passport");
let passportJWT = require("passport-jwt");
let ExtractJwt = passportJWT.ExtractJwt;
let params = {
    secretOrKey: process.env.JWT_WORKER_KEY,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
};

module.exports = ()=>{
    let strategy = new passportJWT.Strategy(params,(payload,done)=>{
        return done(null, payload);
    });

    passport.use(strategy);

    return {
        initialize: function() {
            return passport.initialize();
        },
        authenticate: function() {
            return passport.authenticate("jwt", {
                session:false
            });
        }
    }
}