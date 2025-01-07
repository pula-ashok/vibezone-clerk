'use client'
import { AddPhotoAlternateOutlined } from '@mui/icons-material';
import Image from 'next/image';
import React from 'react'
import { useForm } from 'react-hook-form';

const Posting = ({post,handlePublish}) => {
  const {register,watch,handleSubmit,formState: { errors },} = useForm({defaultValues:post});
  return (
    <form className="flex  flex-col gap-7 pb-24">
      <label
        htmlFor="photo"
        className="flex gap-4 items-center text-lighting-1 cursor-pointer"
      >
        {watch("postPhoto") ? (
          // Check profile photo is a string or a file
          typeof watch("postPhoto") === "string" ? (
            <Image
              src={watch("postPhoto")}
              alt="post"
              width={250}
              height={200}
              className="object-cover rounded-lg"
            />
          ) : (
            <Image
              src={URL.createObjectURL(watch("postPhoto")[0])}
              alt="post"
              width={250}
              height={200}
              className="object-cover rounded-lg"
            />
          )
        ) : (
          <AddPhotoAlternateOutlined
            sx={{ fontSize: "100px", color: "white" }}
          />
        )}
        <p>Upload a photo</p>
      </label>
      <input
        type="file"
        id="photo"
        hidden
        {...register("postPhoto", {
          validate: (value) => {
            if (
              typeof value === null ||
              (Array.isArray(value) && value.length === 0) ||
              value === undefined
            ) {
              return "Please upload a photo";
            }
            return true;
          },
        })}
      />
      {errors.postPhoto && <p className='text-red-500'>{errors.postPhoto.message}</p>}
      <div>
        <label htmlFor="caption" className='text-light-1'>Caption</label>
        <textarea id='caption' rows={3} placeholder="What's on your mind?" {...register("caption",{required:'Caption is required',validate:value=>{
          if(value.length<3){
            return 'Caption must be at least 3 characters'
          }
          return true
        }})} className="w-full input"/>
        {errors.caption && <p className='text-red-500'>{errors.caption.message}</p>}
      </div>
      <div>
        <label htmlFor="tag" className='text-light-1'>Tags</label>
        <input type="text" placeholder='#tag' id='tag' {...register('tag',{required:'Tag is required',validate:value=>{
          if(value.length<3)
            {return 'Tag must be at least 3 characters'}
          return true}})} className='input w-full'/>
      </div>
      <button type='submit' className='py-2.5 rounded-lg mt-10 bg-purple-1 hover:bg-pink-1 text-light-1'>Publish</button>
    </form>
  );
}

export default Posting