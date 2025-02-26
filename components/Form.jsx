"use client"

import React, { useState } from 'react'
import TagsInput from './TagsInput'
import SearchDropdown from './SearchDropdown'


const Form = ({ post, setPost, handleSubmit }) => {

  return (
    <section className='w-full flex items-center justify-center'>
      <form
        onSubmit={handleSubmit}
        className='glassmorphism w-full max-w-2xl'
        onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
      >

        <label>
          <span>URL</span>
          <input
            type='text'
            value={post.url}
            onChange={(e) => setPost({ ...post, url: e.target.value })}
            className='form_input'
            placeholder='https://'
            required
          />
        </label>

        <label>
          <span>Description</span>
          <input
            type='text'
            value={post.description}
            onChange={(e) => setPost({ ...post, description: e.target.value })}
            className='form_input'
            placeholder='Top biriyani spot in thrissur town, location....'
          />
        </label>

        <label className=''>
          <span>Group</span>
            <SearchDropdown post={post} setPost={setPost} />
     
        </label>



        <label>
          <span>Tags</span>

          <TagsInput post={post} setPost={setPost} />
        </label>

        <div className='mt-3'>
          <span className=''>Accessibility</span>
          <div className="mt-4 ">
            <label>
              <input
                type="radio"
                value="public"
                checked={post.accessibility === 'public'}
                onChange={(e) => setPost({ ...post, accessibility: e.target.value })}
                required
              />
              Public
            </label>
            <label className='ml-5'>
              <input
                type="radio"
                value="private"
                checked={post.accessibility === 'private'}
                onChange={(e) => setPost({ ...post, accessibility: e.target.value })}
                required
              />
              Private
            </label>
          </div>
        </div>

        <button className='black_btn mt-3 place-self-end' type='submit'>POST</button>

      </form>

    </section>
  )
}

export default Form