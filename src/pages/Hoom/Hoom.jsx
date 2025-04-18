import React from 'react';
import Bannar from '../../Componenets/Bannar/Bannar';
import Books from '../Books/Books';
import { useLoaderData } from 'react-router';

const Hoom = () => {
    const data=useLoaderData();
    console.log(data)
    return (
        <div>
           <Bannar></Bannar>
           <Books data={data}></Books>
        </div>
    );
};

export default Hoom;