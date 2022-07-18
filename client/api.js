import request from 'superagent'

export function fetchShapes () {
    return request.get('api/v1/shapes')
    .then(res => res.body)
}

export function postOneShape (name, array) {
    return request.post('api/v1/shapes')
    .send({
        name: shape,
        array: []
    })
    .then(res => res.body.newId)
}