import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

    //Pages User
import Home from './pages/Home/index.js';

export default function App (){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' exact element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    )
}