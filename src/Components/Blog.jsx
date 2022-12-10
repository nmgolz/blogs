import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import {  put, newLoader } from '../Functions/Data'
import CommentForm from './AddCommentForm'
import Comment from './Comment'
import NewPostPage from './NewPostPage'


function Blog() {

    const blog = useLoaderData();
    const [newBlog, setBlog] = useState(blog);

    const updatePosts = async (updatedPosts) => {
        await put(updatedPosts);
        fetchLists();
    };

    const deletePost = (postId) => {
        const newBlogPosts = {
            ...newBlog,
            blogPosts: newBlog.blogPosts.filter((x) => x.id !== postId)
        };
        updatePosts(newBlogPosts);
    };

    const fetchLists = async () => {
        const aNewBlog = await newLoader(blog);     
        setBlog( aNewBlog );
    };

    useEffect(() => {
        fetchLists(blog, setBlog);
    },[blog]);
    
        
  return (
        <div>
            <div className='container bottom-margin'>
                <div className='card'>
                    <div className='card-header bg-dark text-light'>
                        <h3>{ newBlog.blogName }</h3>
                    </div>
                    <div className='card-body'>
                        { newBlog.blogPosts.map(({postName, postContent, id, allblogId}) => (
                            <div  key={id} className='container mt-2'>
                            <div key={id} className='card'>
                                <div className='card-header text-center'>
                                    <h4>{postName}</h4>
                                </div>
                                <div className='card-body'>
                                    {postContent}
                                    <button 
                                        className="btn btn-outline-danger d-flex align-items-end" 
                                        onClick={(e) => deletePost(id)}>
                                        Delete
                                    </button>
                                </div>
                            </div>
                            </div>
                        ))}
                        <div>
                            <NewPostPage 
                                blog={newBlog}
                                updatePosts={updatePosts}
                                />
                        </div>
                    </div>
                    <div className='card-footer'>
                        <div>
                            <CommentForm 
                                blog={newBlog}
                                updatePosts={updatePosts}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Blog