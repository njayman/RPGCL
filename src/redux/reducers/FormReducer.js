const { ADD__DATA } = require("../types/FormTypes");

const initialState = {
    formobject: []
};

export const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD__DATA:
            return {
                ...state,
                formobject: [...state.formobject, action.payload]
            }
        default:
            return state;
    }
}

