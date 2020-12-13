const { TO_BANGLA, TO_ENGLISH } = require("../types/LangTypes");

const initialState = {
    language: "bn-bd"
};
export const languageReducer = (state = initialState, action) => {
    switch (action.type) {
        case TO_BANGLA:
            return {
                ...state,
                language: 'bn-bd'
            }
        case TO_ENGLISH:
            return {
                ...state,
                language: 'en-us'
            }
        default:
            return state;
    }
}