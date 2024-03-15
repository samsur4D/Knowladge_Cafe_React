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
  const [readingTime , setReadingTime] = useState(0)

  const handelAddBookmark = blog =>{
    //  console.log(blog);
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handelMarkAsRead = time =>{
    const newReadingTime = readingTime + time ;
    setReadingTime(newReadingTime);
  }


  return (
    <>
      <Header></Header>
      {/* লোড করা ডাটা গুলো দেখাতে হলে */}
      
      <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handelAddBookmark={handelAddBookmark} handelMarkAsRead={handelMarkAsRead} ></Blogs>
      <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      
      </div>
    </>
  )
}

export default App
