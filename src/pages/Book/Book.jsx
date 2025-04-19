import React, { use } from 'react';
import { DiCreativecommons } from 'react-icons/di';
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from 'react-router';

const Book = ({singleBook}) => {
    const {bookName, publisher, image,bookId, rating, category, tags, yearOfPublishing
    }=singleBook;
    // console.log(singleBook)
    // const data=use(bookPromise)
    // console.log(data)
    return (
        <div>
            <Link to={`/bookDetails/${bookId}`}>
            <div className="card bg-base-100 py-4 shadow-sm border-gray-500">
  <figure className='p-4 w-3/4 bg-gray-200 mx-auto'>
    <img className='h-[166px] py-4'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <div className='flex  justify-around mb-4 font-[600]'>
      {
        tags.map(tag=><button>{tag}</button>)
      }
    </div>
    <h2 className="card-title">
      {bookName}
      <div className="badge badge-secondary">{yearOfPublishing}</div>
    </h2>
    <p>Book by: {publisher}</p>
    <div className='border-t-1 border-dashed p-2'></div>
    <div className="card-actions justify-end">
      <div className="badge badge-outline border-none font-[600]">{category}</div>
      <div className="badge badge-outline border-none font-[600]">{rating} <FaStarHalfAlt /></div>
    </div>
  </div>
</div>
</Link>
        </div>
    );
};

export default Book;