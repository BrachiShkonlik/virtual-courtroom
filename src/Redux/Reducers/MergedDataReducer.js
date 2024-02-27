var inititalState = [];

 const MergedDataReducer = (state = inititalState , action ) => {

    switch(action.type) {
        case 'SETMERGEDATA':
            debugger
            state = action.payload;
            return state;
    }
    return state;
};

export default MergedDataReducer;
