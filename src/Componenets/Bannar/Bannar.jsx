import React from 'react';

const Bannar = () => {
    return (
        <div>
          <div className="hero bg-base-200 p-16">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src="../../../assets/books.jpg"
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Books to Freshen up <br /> Your Bookself!</h1>
      <p className="py-4">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">View The List</button>
    </div>
  </div>
</div>  
        </div>
    );
};

export default Bannar;