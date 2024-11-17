
import { useState } from 'react'
import './App.css'
import Blogs from './Component/Blog/Blogs'
import Bookmarks from './Component/Bookmark/Bookmarks'
import Headers from './Component/Header/Headers'

function App() {
  const [bookmark, setBookmark]=useState([]);
  const [readmark, setReadmark]=useState(0);

  const bookmarks= (blog) => {
  const newBookmarks=[...bookmark, blog];
       setBookmark(newBookmarks);
  }

  const readMark= (id, read)=>{
    const reads=parseInt(read);
    const readmarks=parseInt(readmark);
    const readTime=parseInt(readmarks + reads);
    setReadmark(readTime);
    
    const removeBookmarks=bookmark.filter(bookmark => bookmark.id !== id);
    setBookmark(removeBookmarks);
    
  }

  return (
    <>
      <Headers></Headers>
      <div className="flex justify-between text-start w-[80%] m-auto">
      <Blogs bookmarks={bookmarks} readMark={readMark}></Blogs>
      <Bookmarks bookmark={bookmark} readmark={readmark}></Bookmarks>
      </div>
    </>
  )
}

export default App
