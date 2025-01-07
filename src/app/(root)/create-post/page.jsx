'use client'
import Posting from '@components/layout/form/Posting'
import React from 'react'

const CreatePost = () => {
  const postData={title:'',posts:[],savedPosts:[],likedPosts:[]}
  return (
    <div>
      <Posting post={postData} handlePublish={()=>{}}/>
    </div>
  )
}

export default CreatePost