


import pic from '../../assets/images/Vector.svg'
import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({ blog , handelAddBookmark,handelMarkAsRead}) => {
    const {title,cover,reading_time,author_image,author_name,posted_date,hashtags} = blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full rounded-lg' src={cover} alt={`Cover picture of the title ${title}`}/>
            <div className='flex justify-between items-center mt-3'>
                     <div className='flex items-center gap-2 '>
                            <img className='rounded-full w-14 h-20' src={author_image} alt="" />
                            <div>
                                <h3 className='text-2xl'>{author_name}</h3>
                                <p>{posted_date}</p>
                            </div>
                     </div>
                     <div className='flex items-center'>
                                <span>{reading_time}min read</span> 
                                <button onClick={() => handelAddBookmark(blog)} className='ml-2 text-red-500 text-3xl'><FaBookmark></FaBookmark></button>
                     </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                    hashtags.map((hash,idx) =><span className='gap-2 ml-2' key={idx}><a href="" className='gap-2'>{hash}</a></span>)
                }
            </p>
                  
                  <button onClick={()=>handelMarkAsRead(reading_time)} className='text-red-500 font-bold underline'>Mark As Read</button>

        </div>

    );
};

Blog.PropTypes = {
    blog: PropTypes.object.isRequired,
    handelAddBookmark:PropTypes.func,
    handelMarkAsRead:PropTypes.func,
}

export default Blog;