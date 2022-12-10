import React, { useState, useEffect } from 'react'

function NewPostPage(props) {

  const {blog, updatePosts} = props
  const [postName, setPostName] = useState('');
  const [postContent, setPostCont] = useState('');
  const [id, setId] = useState();
  const allblogId = blog.id;

  const addPost = (post) => updatePosts({...blog, blogPosts: [...blog.blogPosts, post]})

  const handleNameInput = (e) => {
    setPostName(e.target.value);
    setId(Math.floor(Math.random()* 999));
}
const handleContInput = (e) => {
  setPostCont(e.target.value);
}

  const onSubmit = (e) => {
    e.preventDefault();
    addPost({ postName, postContent, id, allblogId })
    setPostName('');
    setPostCont('');
}
useEffect(() => {
  //console.log(blog);
}, [blog])

  return (
    <form onSubmit={ onSubmit } className='container'>
      <p className='my-2 d-flex justify-content-start'>Post Title</p>
      <input 
        className='form-control w-25 my-2' 
        placeholder='Post Title' 
        type='text'
        onChange={ handleNameInput }
        value={ postName }>
      </input>
      <textarea 
        className='form-control my-2' 
        type='text' 
        rows="4" 
        placeholder='Write your blog post here'
        onChange={ handleContInput }
        value={ postContent }>
      </textarea>
      <button type='submit' className='btn btn-outline-info mt-2 text-dark'>Create Blog Post</button>
    </form>
  )
}

export default NewPostPage
