import {verify as verifyJWT} from '../services/tokens.service';
import {getUserById} from '../model/user.model.mongo';
export async function loadUser(req,res,next){
    console.log('in load user middleware')
    const cookies = await req.cookies;
    if(cookies?.authBlogCookie?.token){
        const decoded = verifyJWT(cookies.authBlogCookie.token);
        if(decoded?.userData){
            const user = await getUserById(decoded.userData._id);
            if(user){
                req.user = user;
                req.userCookieData = cookies.authBlogCookie;
            }
        }
    }
    next();
}

export async function verify(req,res,next){
    console.log(`in verify middleware user`);

    if(!req.user || !req.user.tokens){
        return res.status(401).send("unauthorized");
    }

    const token = req.user.tokens.find(t=>t.tokenId === req.userCookieData.r)
    if(!token)
        return res.status(401).send("unauthorized");

    //TODO: implement refresh token if need (if time exceeds)
    next();
}