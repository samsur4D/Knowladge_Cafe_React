import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Header/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Bookmark from './components/Bookmark/Bookmark'


function App() {

  const [bookmarks,setBookmarks] = useState([]);

  const handelAddBookmark = blog =>{
    const [newBookmarks] = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  return (
    <>
      <Header></Header>
      {/* লোড করা ডাটা গুলো দেখাতে হলে */}
      
      <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handelAddBookmark={handelAddBookmark}></Blogs>
      <Bookmarks bookmarks={bookmarks}></Bookmarks>
      
      </div>
    </>
  )
}

export default App
