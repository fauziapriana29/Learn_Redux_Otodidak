import { combineReducers } from 'redux'

const listProductReducer = (state=[], action) => {
    if (action.type === "AMBIL_DATA") {
        return action.data
    }

    return state
}
export default combineReducers({
    listProduct: listProductReducer
})