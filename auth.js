const passport = require('passport');
const localstrategy = require('passport-local').Strategy;
const person = require('./models/Demoperson')


//const passport = require('../auth');
passport.use(new localstrategy(async (username, password, done) => {
    try {
        const user = await person.findOne({ username: username });
        // { username } = { username: username }
        if (!user)
            return done(null, false, { message: 'incorect user' });
        const ismatchpassword = await  user.comparepassword(password);
        if (ismatchpassword) {
            return done(null, user);
        }
        else {
            return done(null, false, { message: 'incorect password' })
        }
    } catch (error) {
        return done(error);
    }
}))

module.exports = passport;