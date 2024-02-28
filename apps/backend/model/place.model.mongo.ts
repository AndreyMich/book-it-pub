import mongoose from "mongoose";
const ObjectId = mongoose.Schema.ObjectId;

const PlaceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    picUrl: {
        type: String,
        required: true
    },
    description:  {
        type: String,
        required: true
    },
    ownerId:{
        type:ObjectId,
        ref:"User",
        required: true
    }
})

const Place = mongoose.model("Place", PlaceSchema);

export default Place;

