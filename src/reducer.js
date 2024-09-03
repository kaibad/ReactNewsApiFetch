const Reducer = (state, action) => {
    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true,
            }
        case "GET_STORIES":
            return {
                ...state,
                isLoading: false,
                hits: action.payload.hits,
                nbPages: action.payload.nbPages,
            }

        case "REMOVE_POST":
            return {
                ...state,
                hits: state.hits.filter((currentElementId) => currentElementId.objectID !== action.payload),
            }

        case "SERCH_POST":
            return {
                ...state,
                // query: action.payload,

            }
        default:
            // If the action type is not recognized, return the current state unchanged
            return state;

    }
}
export default Reducer;