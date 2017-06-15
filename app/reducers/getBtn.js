import * as Types from '../action-types/getBtn'

let initState = [];
export function getBtn(state=initState,action) {
    switch (action.type) {
        case Types.GET_BTN:
            return action.data;
        default:
            return state;
    }
}
