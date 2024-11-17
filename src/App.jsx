
import './App.css'
import Blogs from './Component/Blog/Blogs'
import Bookmarks from './Component/Bookmark/Bookmarks'
import Headers from './Component/Header/Headers'

function App() {
  

  return (
    <>
      <Headers></Headers>
      <div className="flex justify-between text-start w-[80%] m-auto gap-7">
      <Blogs></Blogs>
      <Bookmarks></Bookmarks>
      </div>
    </>
  )
}

export default App
