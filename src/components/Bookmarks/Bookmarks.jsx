
//  import PropTypes from 'prop-types';
// import Bookmark from '../Bookmark/Bookmark'

const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3">
            <h2 className=" text-2xl mt-10 ml-3">Bookmarks Blogs : {bookmarks.length}</h2>
           
            
        </div>
    );
};

// Bookmarks.proptypes = {
//     bookmarks: PropTypes.array
// }

export default Bookmarks;