import {get} from '../index'

export function getSlider() {
    return get('/api/slider');
}

export function getBtn() {
    return get('/api/btn');
}

export function getList() {
    return get('/api/getlist');
}
