import {UserModel} from '../model/user.model.mongo'
export async function GetUserByUserId(userId){
    return UserModel.findById(userId);
}

export async function createUser(newUser){

    try {
        const userToCreate = new UserModel(newUser);
        return await userToCreate.save();
    } catch (e) {

    }
}