import React from 'react';

const url = "https://638e6ac9aefc455fb2bc986d.mockapi.io/allblogs"

export const rootLoader = async () => {
    const results = await fetch(url);
    if(!results.ok) throw new Error('something failed!');
  
    const allblogs = await results.json();
  
    return allblogs;
}

export const newLoader = async (blog) => {
    const results = await fetch(`${url}/${blog.id}`);
    if(!results.ok) throw new Error('something failed!');
  
    const allblogs = await results.json();
  
    return allblogs;
}

export const blogLoader = async ({ params }) => {
    const results = await fetch(`${url}/${params.id}`);
    if(!results.ok) throw new Error('something failed!');

    const blog = await results.json();

    return blog;
}


export const post = async (blog) => {
    try {
        console.log(blog)
        const resp = await fetch(url, {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(blog)
        });
        const resData = await resp.json();
        return console.log(resData), resData;
    } catch(e){
        console.log(`error with updating the blogposts.`, e);
    }
}

export const put = async (blog) => {
    try {
        console.log(blog)
        const resp = await fetch(`${url}/${blog.id}`, {
            method:'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(blog)
        });
        const resData = await resp.json();
        return resData;
    } catch(e){
        console.log(`error with updating the blogposts.`, e);
    }
}

export const fetchLists = async (list, func) => {
    const aNewBlog = await list;     
    func( aNewBlog );
};

export const updateList = async (updatedList) => {
    await post(updatedList);
    console.log(updatedList)
    fetchLists();
};


