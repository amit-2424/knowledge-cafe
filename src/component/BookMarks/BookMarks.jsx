import SingleBookMarks from "../SingleBookMarks/SingleBookMarks";

const BookMarks = ({bookMarks,readingTime}) => {
    // console.log(bookMarks)
    return (
        <div className="w-1/3 bg-slate-300 p-4 mt-2 rounded">
            <div className="w-full p-4 bg-slate-400 rounded mt-2 text-xl font-bold">Spend Time on read: {readingTime}</div>
            <h2 className="w-full text-center m-auto text-2xl p-4">Book Marks Blogs: {bookMarks.length}</h2>
            <div>
                {
                    bookMarks.map((book,idx)=><SingleBookMarks key={idx} bookMark={book}></SingleBookMarks>)
                }
            </div>
        </div>
    );
};

export default BookMarks;