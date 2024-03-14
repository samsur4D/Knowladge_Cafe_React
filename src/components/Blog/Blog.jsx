


import pic from '../../assets/images/Vector.svg'
import PropTypes from 'prop-types';

const Blog = ({ blog , handelAddBookmark}) => {
    const {title,cover,reading_time,author_image,author_name,posted_date,hashtags} = blog;
    return (
        <div className='mb-20'>
            <img className='w-[845px] rounded-lg' src={cover} alt={`Cover picture of the title ${title}`}/>
            <div className='flex justify-between items-center mt-3'>
                     <div className='flex items-center gap-2'>
                            <img className='rounded-full w-14 h-20' src={author_image} alt="" />
                            <div>
                                <h3 className='text-2xl'>{author_name}</h3>
                                <p>{posted_date}</p>
                            </div>
                     </div>
                     <div className='flex items-center'>
                                <span>{reading_time}min read</span> 
                                <button onClick={() => handelAddBookmark(blog)} className='text-2xl'>
                                         <img className='ml-2 mr-2 ' src={pic} alt="" /></button>  
                     </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                    hashtags.map((hash,idx) =><span className='gap-2 ml-2' key={idx}><a href="" className='gap-2'>{hash}</a></span>)
                }
            </p>
        </div>

    );
};

Blog.PropTypes = {
    blog: PropTypes.object.isRequired,
    handelAddBookmark:PropTypes.func
}

export default Blog;