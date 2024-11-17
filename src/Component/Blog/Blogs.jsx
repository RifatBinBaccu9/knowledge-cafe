import {useState, useEffect } from "react";
import Blog from "./Blog";
import PropTypes from 'prop-types';


const Blogs = ({bookmarks, readMark}) => {
    const [blogs, setBlogs]=useState([]);

    useEffect(()=>{
        fetch('cafe.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="w-[60%]">
            {
                blogs.map((blog, idx) => <Blog
                     key={idx}
                     blog={blog} 
                     bookmarks={bookmarks}
                     readMark={readMark}></Blog>)
            }
        </div>
    );
};
Blogs.propTypes ={
    bookmarks: PropTypes.func,
    readMark: PropTypes.func
}
export default Blogs;