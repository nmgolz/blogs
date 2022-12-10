import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useLoaderData } from "react-router-dom";
import { fetchLists } from '../Functions/Data';


function Comment(props) {

  const{ blog } = props
  console.log(blog.comments)

  useEffect(() => {
    console.log(blog)
  }, [blog])

  return (
    <div>
        { blog.comments.map(({ username, comment, commentId }) => (
        <ul className='list-group border border-2 mb-1 w-50'key={commentId}>
            <li className='list-group-item text-light bg-dark'><strong>Username:</strong> { username }</li>
            <li className='list-group-item text-light bg-dark'><strong>Comment:</strong> { comment }</li>
        </ul>
        ))}
    </div>
  )
}


export default Comment;