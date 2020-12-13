const { ADD__DATA } = require("../types/FormTypes")

export const addDataToForm = (data) => ({
    type: ADD__DATA,
    payload: data
})