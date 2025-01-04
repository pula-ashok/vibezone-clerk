
import User from '@lib/models/User';
import { connectDB } from '@lib/mongodb/mongoose';
export const createOrUpdateUser=async(id,first_name,last_name,image_url,email_addresses,username)=>{
    try {
        await connectDB();
        const user = await User.findOneAndUpdate(
          { clerkId: id },
          {
            $set: {
              clerkId: id,
              firstName: first_name,
              lastName: last_name,
              profilePhoto: image_url,
              email: email_addresses[0].email_address,
              username: username,
            },
          },
          {
            upsert: true,
            new: true,
          }
        );
        await user.save();
        console.log("test",user)
        return user;

    } catch (error) {
        console.log(error)
    }
}
export const deleteUser=async(id)=>{
    try {
        await connectDB();
        await User.findOneAndDelete({clerkId:id})
    } catch (error) {
        console.log(error)
    }
}