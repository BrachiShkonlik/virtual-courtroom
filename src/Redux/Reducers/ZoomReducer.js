var inititalState = [];

export const ZoomReducer = (state = inititalState, action) => {

    switch (action.type) {
        case 'SETZOOMDETAILS':

            state = action.payload;
            return state;
    }
    return state;
};

