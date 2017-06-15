import * as Types from '../action-types/getList'

export function getList(data) {
    return {
        type: Types.GET_LIST,
        data
    }
}