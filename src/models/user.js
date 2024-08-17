import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: true
        },
        nickname: {
            type: String,
            required: true
        },
        password : {
            type: String,
            required: true
        },
      
        email : {
            type: String,
            required: true
        },
        isAdmin : {
            type: Boolean,
            default: false,
        },
        avatar: String,
        coverPicture: String,
        sex: String,
        liveIn: String,
        workAt: String,
        relationship: String,
        followers: [] ,
        following: []
    },
    {timestamps: true}
)

const User = mongoose.model("Users", UserSchema);
export default User