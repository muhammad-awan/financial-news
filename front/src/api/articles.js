import axios from './init'

export function list() {
    return axios.get('/articles')
        .then(res => res.data)
}