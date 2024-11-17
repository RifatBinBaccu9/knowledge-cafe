import { useEffect } from "react";
import { useState } from "react";


const Blogs = () => {
    const [cafe, setCafe]=useState([]);

    useEffect(()=>{
        fetch('cafe.json')
        .then(res => res.json())
        .then(data => setCafe(data))
    },[])
    return (
        <div className="w-[60%]">
            <h1>hello: {cafe.length}</h1>
        </div>
    );
};

export default Blogs;