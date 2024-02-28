import {setUserCookies} from '../services/tokens.service';
import {createUser as createUserDb,getUserByEmailAndPassword} from '../model/user.model.mongo';
export const login = async(req, res, next)=>{
    const {username,password} = req.body;
    let user = await getUserByEmailAndPassword(username,password);
    if(user){
        //checks whether token exist and return if the token is still in a valid timeframe
        let token = await setUserCookies(user,res);
        if(token){
            return res.status(200).send("Logged in successfully");
        }
    }
    return res.status(403).send("Not Authorized");
}

export const register = async (req, res)=>{
    try{
        const createdUser =  await createUserDb(req.body);
        res.send(createdUser);
    }
    catch (err){
        res.status(500).send("Internal Server Error: " + err);
    }

}

export const getSession = async (req, res)=>{
    delete req.user.tokens;
    return res.status(200).json(req.user);
}