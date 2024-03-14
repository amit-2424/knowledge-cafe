import { useEffect } from "react";
import { useState } from "react";

const Blog = () => {

    const [blogs,setBlogs] = useState([]);

    useEffect(()=>{
        fetch("blogs.json")
        .then(res=>res.json())
        .then(data=>setBlogs(data));
    },[])

    return (
        <div>
            {
                blogs.map(blog=><div>
                    <img src={blog.cover} alt="" />
                </div>)
            }
        </div>
    );
};

export default Blog;