import * as Types from '../action-types/getBtn'

export function getBtn(data) {
    return {
        type: Types.GET_BTN,
        data
    }
}
