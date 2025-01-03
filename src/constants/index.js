import { AddPhotoAlternateOutlined, GroupOutlined, Home, ManageAccountsOutlined } from "@mui/icons-material";

export const sidebarLinks=[
    {icon:<Home sx={{color:'white',fontSize:'26px'}}/>,label:"Home",route:"/"},
    {icon:<AddPhotoAlternateOutlined sx={{color:'white',fontSize:'26px'}}/>,label:"Create Post",route:"/create-post"},
    {icon:<GroupOutlined sx={{color:'white',fontSize:'26px'}}/>,label:'People',route:"/people"},
    {icon:<ManageAccountsOutlined sx={{color:'white',fontSize:'26px'}}/>,label:'Edit Profile',route:"/edit-profile"}
]
export const pageTitles=[
    {url:'/',title:'Feed'},
    {url:'/edit-profile',title:'Edit Profile'},
    {url:'/create-post',title:'Create Post'},
    {url:'/edit-post',title:'Edit Post'},
    {url:'/search',title:'Search'},
    {url:'/saved-posts',title:'Saved Posts'},
    {url:'/liked-posts',title:'Liked Posts'}
]