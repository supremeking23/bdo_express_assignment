let users = require("../data/bank_db");

const getAllUsers = async(req, res) => {

};

const landingPage = async(req, res) => {
    res.render("../views/users/index");
}

/** GET */
const signUp = async(req, res) => {
    let is_signup = true;
    res.render("../views/users/signup_signin", {is_signup});
}

/** GET */
const signIn = async(req, res) => {
    let is_signup = false;
    res.render("../views/users/signup_signin", {is_signup});
}


/** POST */
const addUser = async(req, res) => {
    let {first_name, last_name, username, password} = req.body;
    let user = {
        account_number: users.length + 1,
        first_name,
        last_name,
        username, 
        password,
        balance: 5000
    };
    users.push(user);

    req.session.login_user = user;

    console.log(users);

    res.redirect("/");
}

/** POST */
const signInProcess = async(req, res) => {
    let {username, password} = req.body;

    let found_user = users.find((user) =>{
        return user.username === username && user.password === password;
    });

    req.session.login_user = found_user;

    res.redirect("/");
}


module.exports = {
    landingPage,
    signUp,
    signIn,
    addUser,
    signInProcess
};