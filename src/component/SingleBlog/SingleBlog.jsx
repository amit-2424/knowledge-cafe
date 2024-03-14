
import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa";


const SingleBlog = ({ blog,handleBookMarks,handleReadingTime }) => {
    const { title, cover, author_name, author_img, reading_time, posted_date, hashtags, } = blog;
    // console.log(blog);
    return (
        <div className='mb-20'>

            <img className='w-full mb-8' src={cover} alt={`cover pic of the title ${title}`} />
            <div className='flex justify-between mb-2'>
                <div className='flex justify-between'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author_name}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min red</span>
                    <button onClick={()=>(handleBookMarks(blog))} className='ml-4 text-2xl'><FaBookmark /></button>
                </div>
            </div>

            <h2 className='mb-2 text-4xl'>{title}</h2>

            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="#"> #{hash}</a></span>)
                }
            </p>

            <button className='mt-4 bg-slate-100 rounded-xl p-3 underline' onClick={()=>handleReadingTime(reading_time)}>Marks at read</button>
        </div>
    );
};

export default SingleBlog;

SingleBlog.propTypes = {
    blog: PropTypes.object.isRequired,
}