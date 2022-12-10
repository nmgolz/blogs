import React, { useState } from 'react';
import Comment from './Comment';


function CommentForm(props) {

    const {blog, updatePosts} = props
    const [username, setUserName] = useState('');
    const [comment, setComment] = useState('');
    const [commentId, setCommentId] = useState();
    const allblogId = blog.id;

    const addComment = (comment) => updatePosts({...blog, comments: [...blog.comments, comment]})

    const handleDateInput = (e) => {
        setComment(e.target.value);
        setCommentId(`commentId${Math.floor(Math.random()* 999)}`);
        setUserName(`Username${Math.floor(Math.random()* 999)}`);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        addComment({username, comment, commentId, allblogId})
        setComment('');
        setUserName('');
        console.log({username, comment, commentId, allblogId})
    }

  return (
    <div className='w-50'>
        <Comment 
            blog={blog}/>
        <form onSubmit={onSubmit}>
            <p className='mb-1 mt-2 d-flex justify-content-start'>Write A Comment!</p>
            <textarea  
                type='text' 
                onChange={handleDateInput}
                value={comment}
                className='form-control mb-2' 
                rows="4" 
                placeholder='Write a Comment Here!'></textarea>
            <button 
                className='btn btn-outline-info text-dark mx-0 mt-2 d-flex justify-content-start' 
                type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default CommentForm