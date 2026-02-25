import { userlist } from "../model/userModel.js";

export function handleUser(req, res) {

    const userdata = userlist();
    console.log(userdata);
    

    res.render('user',{user:userdata});
}