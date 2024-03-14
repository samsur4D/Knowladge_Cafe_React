import PropTypes from 'prop-types';


const Bookmark = ({bookmark}) => {
    
    const{title} = bookmark;

    return (
        <div className='bg-slate-200 p-4 m-4'>
            <h3 className='text-xl'>{title}</h3>
        </div>
    );
};

Bookmark.prototypes ={
    bookmark: PropTypes.object
}

export default Bookmark;