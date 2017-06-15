import {combineReducers} from 'redux'
import {getList} from './getList'
import {getDoc} from './getDoc'
import {getBtn} from './getBtn'

export default combineReducers({
    getList,
    getDoc,
    getBtn
})
