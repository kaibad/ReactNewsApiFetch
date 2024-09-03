// First, create a Context to establish a way to pass data through the component tree without having to pass props down manually at every level.
// Next, create a Provider to supply the context value to its descendant components. The Provider component makes the context available to any component within its scope.
// In the past, using a Consumer was the common approach to accessing context values in components. This involved a somewhat lengthy process of wrapping components within the Consumer component to retrieve and use the context.
// However, since using a Consumer can be a long and cumbersome process, we can simplify accessing the context by using the useContext hook. The useContext hook provides a more straightforward and concise way to consume context values directly within functional components.


import React, { useContext, useReducer, useEffect } from "react";
import Reducer from "./reducer";

// Defining a variable Api with the URL of the API endpoint to fetch data from.
let Api = "http://hn.algolia.com/api/v1/search?";

const initialState = {
    isLoading: true,
    query: "css",
    nbPages: 0,
    page: 0,
    hits: [],
}

//Context Creation
const AppContext = React.createContext();

// provider function 
const AppProvider = ({ children }) => {

    // const [state, setState] = useState(initialState);
    const [state, dispatch] = useReducer(Reducer, initialState)


    // Defining an asynchronous function to fetch data from the API.
    const fetchApiData = async (url) => {
        dispatch({ type: "SET_LOADING" });
        try {
            // Making a fetch request to the provided URL.
            const res = await fetch(url);

            // Parsing the JSON response from the fetch request.
            const data = await res.json();

            // Logging the fetched data to the console.
            console.log(data);
            dispatch({
                type: "GET_STORIES",
                payload: {
                    hits: data.hits,
                    nbPages: data.nbPages,
                },
            });
        } catch (error) {
            console.log(error);

        }
    }

    //to remove the post
    const removePost = (postID) => {
        dispatch({ type: "REMOVE_POST", payload: postID });
    }

    //to search the post
    const searchpost = (searchquery) => {
        dispatch({ type: "SERCH_POST", payload: searchquery, })
    }

    // Using the useEffect hook to call fetchApiData when the component mounts.

    useEffect(() => {
        fetchApiData(`${Api}query=${state.query}&page=${state.page}`);
    }, [state.query, state.page]);


    return (
        <AppContext.Provider value={{ ...state, removePost, searchpost }}>
            {children}
        </AppContext.Provider>
    );
};

///custom hook creation this help is import single lines instead of those multiple importing 
const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider, useGlobalContext };
