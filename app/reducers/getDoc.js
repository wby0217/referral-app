import * as Types from '../action-types/getDoc'

let initState = [];
export function getDoc(state=initState,action) {
    switch (action.type) {
        case Types.GET_Doc:
            return state.concat(action.data);
        default:
            return state;
    }
}