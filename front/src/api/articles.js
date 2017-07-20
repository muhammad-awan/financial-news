import api from './init'

export function list() {
    return api.get('/articles')
        .then(res => res.data)
}