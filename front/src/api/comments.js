import api from './init'

export function list() {
    return api.get('/comments').then(res => res.data)
}

export function create({ text }) {
    return api.post('/comments', {
        text
    }).then(res => res.data)
}
