import React from 'react';
import {
    createBrowserRouter,
  } from "react-router";
import Root from '../pages/Root/Root';
import Errorpage from '../pages/Errorpage/Errorpage';
import Hoom from '../pages/Hoom/Hoom';
  

export const router = createBrowserRouter([
    {
      path: "/",
      Component: Root,
      errorElement: <Errorpage></Errorpage>,
      children: [
        {
            index:true,
            loader: ()=>fetch('BooksData.json'),
            path:"/",
            Component: Hoom
        }
      ]
    },
  ]);