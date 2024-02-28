import jwt from 'jsonwebtoken';
import { randomUUID } from 'node:crypto';
import {deleteUserTokens, upsertUserToken} from "../model/user.model.mongo";
const SECRET = process.env.JWT_SECRET || 'secret';

const expiresIn = '30d';

const expireInterval = 60 * 1000 * 5;//minute
export async function setUserCookies(user, res) {
    if(user.tokens && user.tokens.length > 0) {
        for(let i = 0; i < user.tokens.length; i++) {
            const token = user.tokens[i];
            const expireDate = +token._doc.createdAt + expireInterval;
            if(Date.now() - expireDate < 0) {//token expired
                return token;
            }
        }
    }

    const token = sign(user);
    await deleteUserTokens(user);
    await upsertUserToken(user,token);
    setCookie(res,token);
    return token;
}

export function sign(userData:any){
    const r = randomUUID();
    const createdAt =  Date.now();
    const token = jwt.sign({userData,createdAt,r},SECRET,{
        expiresIn:expiresIn
    })

    return {
        r,
        createdAt,
        token
    };
}

export function verify(token:string){
    try{
        return jwt.verify(token,SECRET)
    }
    catch (err){
        //
    }
}

export function setCookie(res,token){
    res.cookie("authBlogCookie",token,{
        maxAge:3600000,
        httpOnly:true,
        //secure:true,
        sameSite:'None'
    });
}