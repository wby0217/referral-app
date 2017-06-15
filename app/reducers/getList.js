import * as Types from '../action-types/getList'

let initState = [];
export function getList(state=initState,action) {
    switch (action.type) {
        case Types.GET_LIST:
            return state.length==0?action.data:[...state, action.data];
        default:
            return state;
    }
}
