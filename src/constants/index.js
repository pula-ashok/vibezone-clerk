import { AddPhotoAlternateOutlined, GroupOutlined, Home, ManageAccountsOutlined } from "@mui/icons-material";

export const sidebarLinks=[
    {icon:<Home sx={{color:'white',fontSize:'26px'}}/>,label:"Home",route:"/"},
    {icon:<AddPhotoAlternateOutlined sx={{color:'white',fontSize:'26px'}}/>,label:"Create Post",route:"/create-post"},
    {icon:<GroupOutlined sx={{color:'white',fontSize:'26px'}}/>,label:'People',route:"/people"},
    {icon:<ManageAccountsOutlined sx={{color:'white',fontSize:'26px'}}/>,label:'Edit Profile',route:"/edit-profile"}
]