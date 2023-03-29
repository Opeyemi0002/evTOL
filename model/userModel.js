import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:[true, "this field is necessary"]
    },
    lastname:{
        type:String,
        required:[true, "this field is necessary"]
    },
    email:{
        type:String,
        required:[true, "this field is necessary"]
    },
    password:{
        type:String,
        required:[true, "this field is necessary"]
    },
    age:{
        type:Number,
        required:[true, "this field is necessary"]
    },
    ProfilePic:{
        type:String,
    },
    Blocked:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    isBlock:{
        type:Boolean,
        default: false
    }
}, {
    timestamps:true,
    toJSON:{virtuals:true}
})
const User = mongoose.model('User',userSchema);
export default User;