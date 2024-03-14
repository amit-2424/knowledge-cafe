import { useEffect } from "react";
import { useState } from "react";
import SingleBlog from "../SingleBlog/SingleBlog";

const Blog = ({handleBookMarks,handleReadingTime}) => {

    const [blogs,setBlogs] = useState([]);

    useEffect(()=>{
        fetch("blogs.json")
        .then(res=>res.json())
        .then(data=>setBlogs(data));
    },[])

    return (
        <div className="md:w-2/3 mt-2">
            
            {
                blogs.map(blog=><SingleBlog key={blog.id} blog={blog} handleBookMarks={handleBookMarks} handleReadingTime={handleReadingTime}></SingleBlog>)
            }
        </div>
    );
};

export default Blog;