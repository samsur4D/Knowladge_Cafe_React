
 import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';


const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-200 rounded-xl mt-10 ml-5 pt-2">
            <div>
                <h3 className='text-3xl bg-yellow-200 p-5 m-3 rounded-md font-bold text-gray-600'>Rerading Time: {readingTime} min</h3>
            </div>
            <h2 className=" text-3xl text-center  mt-10 ml-3">Bookmarks Blogs : {bookmarks.length}</h2>
            {
                     bookmarks.map(bookamrk => <Bookmark key={bookamrk.id} bookmark={bookamrk}></Bookmark>)
            }
           
            
        </div>
    );
};

Bookmarks.proptypes = {
    bookmarks: PropTypes.array,
    readingTime:PropTypes.number,
}

export default Bookmarks;