
import './App.css'
import Blogs from './Component/Blog/Blogs'
import Bookmarks from './Component/Blog/Bookmarks'
import Headers from './Component/Header/Headers'

function App() {
  

  return (
    <>
      <Headers></Headers>
      <h1 className='p-6'>Vite + React</h1>
      <div className="flex justify-between">
      <Blogs></Blogs>
      <Bookmarks></Bookmarks>
      </div>
    </>
  )
}

export default App
