import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const Bookdetails = () => {
    const {id}=useParams();
    const bookId=parseFloat(id)
    const data=useLoaderData();
    console.log(data)
    const singleBook=data.find(book=>book.bookId===bookId);
    const {bookName, image}=singleBook;
    return (
        <div className='w-2/3 mx-auto'>
            <img className='w-96 mt-10' src={image} alt="" />
            <h1>{bookName}</h1>
        </div>
    );
};

export default Bookdetails;
