var inititalState = [];

 const MergedDataReducer = (state = inititalState , action ) => {

    switch(action.type) {
        case 'SETMERGEDATA':
            state = action.payload;
            return state;
    }
    return state;
};

export default MergedDataReducer;
