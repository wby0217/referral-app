import * as Types from '../action-types/getDoc'

export function getDoc(data) {
    return {
        type: Types.GET_Doc,
        data
    }
}
