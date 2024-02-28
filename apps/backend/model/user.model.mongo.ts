
import mongoose from "mongoose";

const ObjectId = mongoose.Schema.ObjectId;

const TokenSchema = new mongoose.Schema({
    tokenId:String,
    createdAt:Date,
    token:String
})

const UserSchema = new mongoose.Schema({
    password: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    tokens:[TokenSchema],
    createdAt:{
        type:Date,
        default:Date.now
    },
    roles:[String]
})

export const UserModel = mongoose.model('User', UserSchema);
export async function getAll() {
    //return await readDb(usersDBPath)
}

export async function createUser(user) {
    const userToCreate = new UserModel(user);

    const userId = await userToCreate.save();
    userToCreate.id = userId.id;
    delete userToCreate.password;

    return userToCreate;
}

export async function upsertUserToken(userDb, token) {

    if (!userDb.tokens)
        userDb.tokens = [];

    const tokenIndex = userDb.tokens.findIndex(t => t.tokenId === token.r);
    if (tokenIndex > -1) {
        userDb.tokens = userDb.tokens.splice(tokenIndex, 1);
    }

    userDb.tokens.push({
        tokenId:token.r,
        token:token.token,
        createdAt:token.createdAt
    })
    await userDb.save();
    return userDb;
}

export async function getUserByEmailAndPassword(username, pass) {
    const userDb:any = await UserModel.findOne({username:username,password:pass});
    return userDb;
}

export async function getUserById(userId) {
    //const fetched:any = await User.findOne({_id:userId}).select("");
    return UserModel.findOne({_id:userId}).select("username role createdAt tokens");
}
export async function deleteUserTokens(userDb) {
    if(userDb.tokens) {
        userDb.tokens = [];
        await userDb.save();
    }
    return userDb;
}
