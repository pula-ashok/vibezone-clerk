import User from "@lib/models/User"
import { connectDB } from "@lib/mongodb/mongoose"

export const GET = async (req, { params }) => {
    try {
        await connectDB();
        const clerkId=await params?.id
        // const clerkId=React.use(params)
        const user=await User.findOne({clerkId:clerkId}).populate('followers following').exec()
        // const user=await User.findOne({clerkId:clerkId}).populate('posts savedPosts likedPosts followers following').exec()
        // const user=await User.findOne({clerkId:clerkId})
        return new Response(JSON.stringify(user),{status:200})
    } catch (error) {
        console.log(error)
        return new Response('Something went wronng',{status:500})
    }
}