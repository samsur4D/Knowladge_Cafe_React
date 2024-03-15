// এখানে আমরা ব্লগের ডাটা গুলো লোড করবো

import { useEffect, useState } from "react";
import Blog from "../../Blog/Blog";

import PropTypes from 'prop-types'; 

const Blogs = ({handelAddBookmark ,handelMarkAsRead}) => {

    const[blogs,setBlogs] = useState([]);

    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl">Blogs: {blogs.length}</h1>
            {
                blogs.map(blog => <Blog 
                    key={blog.id}
                     blog={blog}
                     handelAddBookmark={handelAddBookmark}
                     handelMarkAsRead={handelMarkAsRead}
                                     ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handelAddBookmark: PropTypes.func,
    handelMarkAsRead: PropTypes.func
}
export default Blogs;