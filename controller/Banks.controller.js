let users = require("../data/bank_db");

const dashboard = async(req, res) => {
    let { account_number } = req.session.login_user;
    let found_user = users.find(users => users.account_number === account_number);
    
    res.render("../views/banks/dashboard", {current_user : found_user});
}

const withdraw = async(req, res) => {
    let { account_number } = req.session.login_user;
    let found_user = users.find(users => users.account_number === account_number);
    let is_withdraw = true;
    res.render("../views/banks/view_account", {is_withdraw, current_user: found_user});
}

const deposit = async(req, res) => {
    let { account_number } = req.session.login_user;
    let found_user = users.find(users => users.account_number === account_number);
    let is_withdraw = false;
    res.render("../views/banks/view_account", {is_withdraw, current_user: found_user});
}

const updateBankDetail = async(req, res) => {
    let {account_number} = req.params;
    let {amount, transaction} = req.body;
    let found_user_index = users.findIndex(users => users.account_number === parseInt(account_number));



    if(transaction === "withdraw"){
        users[found_user_index].balance =  users[found_user_index].balance - parseInt(amount);
    }
    else{
        users[found_user_index].balance =  users[found_user_index].balance + parseInt(amount);
    }
     
    res.redirect("/");
}

module.exports = {
    dashboard,
    withdraw,
    deposit,
    updateBankDetail
};