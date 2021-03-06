import api from './init'

export function list() {
    return api.get('/articles').then(res => res.data)
}

export function create({ title, url }) {
    return api.post('/articles', {
        title, url
    }).then(res => res.data)
}
