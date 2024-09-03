import React from 'react'
import { useGlobalContext } from './context'

const Search = () => {
    const { query, searchpost } = useGlobalContext;
    return (
        <>
            <h1>KB Tech News</h1>
            <form onSubmit={(e) => e.preventDefault()}>
                <div>
                    <input type="text" placeholder='Search' value={query} />
                </div>
            </form>
            <div>search</div>
        </>

    );
}

export default Search;
// onChange = {(e) => searchpost(e.target.value)}