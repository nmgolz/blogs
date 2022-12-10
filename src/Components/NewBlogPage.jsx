import React, { useState, useEffect }from 'react'
import { useLoaderData } from 'react-router-dom'
import { post } from '../Functions/Data'

function NewBlogPage(props) {

    const { fetchList } = props;

    const [blogName, setBlogName] = useState('');//the blog name that is set for the new blog object when the user enters the name 

    const blogPosts = []; //the array added to the new blog object

    const blog = useLoaderData();//data called through the api

    const rId = Math.floor(Math.random()* 999)//random id genterated for the new blog object

    const [newBlog, setBlogs] = useState(blog);// the array that is imported and changed when a new blog is created

    const addBlog = (createdBlog) => updateList(createdBlog)//adds a new blog to the array of blogs

    const handleNameInput = (e) => {//handles input to se the blogName
        setBlogName(e.target.value);
    }

    const updateList = async (updatedList) => {
        await post(updatedList);
        console.log(updatedList)
        fetchList();
    };

    const onSubmit = (e) => {//handles the submit and calls the addBlog function to create a new blog
        e.preventDefault();
        addBlog({blogName, blogPosts, rId})
        setBlogName('');
    }

    useEffect(() => {;
        fetchList();
    },[newBlog]);

  return (
    <div className='container'>
        <form onSubmit={ onSubmit }>
            <h2 className='mb-1 mt-2 d-flex justify-content-start'>Create a New Blog!</h2>
            <input 
                className='form-control w-25' 
                type='text' 
                placeholder="New Blog Name"
                onChange={ handleNameInput }
                value={ blogName }>
                </input>
            <button 
                className='btn btn-outline-info text-dark mx-0 mt-2 d-flex justify-content-start' 
                type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default NewBlogPage