import PropTypes from 'prop-types';
import Bookmark from './Bookmark';

const Bookmarks = ({bookmark, readmark}) => {
    
    
    return (
        <div className="w-[40%]">
            <hr className=' border mt-10'/>
           <div className='ml-6 mt-5'>
           <h1 className=' bg-slate-500 p-5 rounded-md mb-3 text-xl font-medium'>Spent time on read :{readmark} min</h1>
           <div className='bg-slate-500 p-4 rounded-md'>
           <h1 className=' text-lg font-medium mb-3'>Bookmarked Blogs :{bookmark.length}</h1>
           {
                bookmark.map((book, idx)=> <Bookmark key={idx} book={book}></Bookmark>)
            }
           </div>
           </div>
        </div>
    );
};
Bookmarks.propTypes ={
    bookmark: PropTypes.array,
    readmark: PropTypes.number
}
export default Bookmarks;