import { useEffect } from "react";
import { useState } from "react";


const Blogs = () => {
    const [cafe, setCafe]=useState([]);

    useEffect(()=>{
        fetch('cafe.json')
        .then(res => res.json())
        .then(data => console.log(data))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Blogs;