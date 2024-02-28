import mongoose from 'mongoose';

export async function connectToDb(){
    await mongoose.connect('mongodb://localhost:27017/bookit');

    await import ('./user.model.mongo');
    await import ('./place.model.mongo');

    console.log('connected to db');
}