
import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3">
            <h2 className="text-2xl ">Bookmarks: {bookmarks.length}</h2>
            {
                console.log(bookmarks)
            }
            
        </div>
    );
};

Bookmarks.proptypes = {
    bookmarks: PropTypes.array
}

export default Bookmarks;