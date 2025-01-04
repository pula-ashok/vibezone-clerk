import mongoose from "mongoose";

const postSchema=new mongoose.Schema({
    title:{type:String,required:true},
    posts:{type:[{type:mongoose.Schema.Types.ObjectId,ref:"Post"}],default:[]},
    savedPosts:{type:[{type:mongoose.Schema.Types.ObjectId,ref:"Post"}],default:[]},
    likedPosts:{type:[{type:mongoose.Schema.Types.ObjectId,ref:"Post"}],default:[]},
})

const Post=mongoose.models.Post || mongoose.model("Post",postSchema);
export default Post;