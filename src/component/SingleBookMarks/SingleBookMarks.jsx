
const SingleBookMarks = ({bookMark}) => {
    return (
        <div className="bg-slate-200 p-3 rounded mb-2">
            <h1 className="text-2xl">{bookMark.title}</h1>
        </div>
    );
};

export default SingleBookMarks;