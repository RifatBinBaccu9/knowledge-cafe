import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";

const Blog = ({blog, bookmarks}) => {
    const {title,cover,author_img,author,posted_date,reading_time,hashtags}=blog;
    return (
        <div className='my-10'>
            <hr className=' border my-5'/>
            <img src={cover} alt={title} />
            <div className="flex justify-between my-5">
                <div className="flex gap-7 ">
                    <img src={author_img} alt={author} className=" w-[60px]"/>
                    <div>
                    <h1 className=' text-xl font-bold'>{author}</h1>
                    <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex gap-3'>
                    <p>{reading_time}</p>
                    <button className='mb-[30px]' onClick={bookmarks}><CiBookmark /></button>
                </div>
            </div>
            <h1 className=' text-3xl font-bold'>{title}</h1>
            <div className=' py-3'>
                {
                    hashtags.map((hash, id)=> <span key={id} className='mr-4'>{hash}</span>)
                }
            </div>
            
        </div>
    );
};
Blog.propTypes ={
    blog: PropTypes.object.isRequired
}
export default Blog;