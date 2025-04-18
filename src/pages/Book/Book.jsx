import React, { use } from 'react';
import { FaStarHalfAlt } from "react-icons/fa";

const Book = ({singleBook}) => {
    const {bookName, author, image, rating, category}=singleBook;
    // console.log(singleBook)
    // const data=use(bookPromise)
    // console.log(data)
    return (
        <div>
            <div className="card bg-base-100 py-4 shadow-sm border-gray-500">
  <figure className='p-4 w-3/4 bg-gray-200 mx-auto'>
    <img className='h-[166px] py-4'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {bookName}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline border-none font-[600]">{category}</div>
      <div className="badge badge-outline border-none font-[600]">{rating} <FaStarHalfAlt /></div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Book;