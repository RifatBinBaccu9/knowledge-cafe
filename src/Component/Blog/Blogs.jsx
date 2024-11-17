import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";


const Blogs = ({bookmarks}) => {
    const [blogs, setBlogs]=useState([]);

    useEffect(()=>{
        fetch('cafe.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="w-[60%]">
            {
                blogs.map(blog => <Blog key={blogs.id} blog={blog} bookmarks={bookmarks}></Blog>)
            }
        </div>
    );
};

export default Blogs;