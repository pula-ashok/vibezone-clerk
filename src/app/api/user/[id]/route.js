import User from "@lib/models/User"

export async function GET(req,{params}){
    try {
        const clerkId=await params?.id
        // const clerkId=React.use(params)
        const user=await User.findOne({clerkId:clerkId})
        console.log(user,"testing")
        return new Response(JSON.stringify(user),{status:200})
    } catch (error) {
        console.log(error)
        return new Response('Something went wronng',{status:500})
    }
}