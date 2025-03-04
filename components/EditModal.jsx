import React, { useRef, useState } from 'react'
import { MdClose } from "react-icons/md";
import TagsInput from './TagsInput';
import SearchDropdown from './SearchDropdown';

const EditModal = ({ onClose }) => {
  const modalRef = useRef(); 

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const closeModal = (e)=>{
    if(modalRef.current === e.target){
      onClose();
    }
  }

  const [post, setPost] = useState({
    url: "",
    description: "",
    group: "Unsorted",
    tags: [],
    accessibility: "public"
  });

  return (
    <div ref={modalRef} onClick={closeModal} className='fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center'>
      <div className='mt-10 flex flex-col gap-5'>
        <button onClick={onClose}> <MdClose /> </button>
        <div className='flex flex-col gap-3 glassmorphism'>
          <h3 className='text-xl font-semibold blue_gradient'>Edit Content</h3>

          <form
            onSubmit={handleSubmit}
            className=' w-full max-w-2xl flex flex-col gap-5'
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
              <div className="mt-4 flex gap-5">
                <label>
                  <input
                    type="radio"
                    value="public"
                    checked={post.accessibility === 'public'}
                    onChange={(e) => setPost({ ...post, accessibility: e.target.value })}
                    required
                    className=''
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

            <button className='black_btn mt-3 place-self-end' type='submit'>EDIT</button>

          </form>
        </div>
      </div>
    </div>
  )
}

export default EditModal