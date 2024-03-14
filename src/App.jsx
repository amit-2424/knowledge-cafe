
import { useState } from 'react'
import './App.css'
import Blogs from './component/Blogs/Blog'
import BookMarks from './component/BookMarks/BookMarks'
import Header from './component/Header/Header'

function App() {

  const [bookMarks,setBookMarks] = useState([]);
  const [readingTime,setReadingTime] = useState(0);

  const handleBookMarks = book =>{
          const newBook = [...bookMarks,book]
          setBookMarks(newBook);
  }

  const handleReadingTime = reading =>{
    // console.log(reading);
    const newReading = readingTime + reading;
    setReadingTime(newReading);
  }

  return (
    <div className='max-w-7xl mx-auto'>
      
      <Header></Header>
      <div className='md:flex max-w-7xl m-auto gap-4'>
      <Blogs handleBookMarks={handleBookMarks} handleReadingTime={handleReadingTime}></Blogs>
      <BookMarks bookMarks={bookMarks} readingTime={readingTime}></BookMarks>
      </div>
      
    </div>
  )
}

export default App
