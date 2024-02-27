var inititalState = [];

 const PanelReducer = (state = inititalState , action ) => {

    switch(action.type) {
        case 'SETPANELDETAILS':
            debugger
            state = action.payload;
            return state;
    }
    return state;
};

export default PanelReducer;

