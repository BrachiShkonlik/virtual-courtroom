var inititalState = [];

 const PanelReducer = (state = inititalState , action ) => {

    switch(action.type) {
        case 'SETPANELDETAILS':
            state = action.payload;
            return state;
    }
    return state;
};

export default PanelReducer;

