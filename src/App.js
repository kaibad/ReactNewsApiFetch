import React from 'react';
import Search from './search';
import Pagination from './pagination';
import Stories from './stories';
import './App.css'
// import { AppContext } from './context';
// import { useContext } from 'react';
// import { useGlobalContext } from './context';

const App = () => {
    // const data = useGlobalContext();
    return (
        <>
            <Search />
            <Pagination />
            <Stories />
        </>
    );
}

export default App