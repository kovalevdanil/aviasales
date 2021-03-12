import {BASE_URL} from './constants'

export const getUser = (id) => {
    return fetch(`${BASE_URL}/users/${id}`)
        .then(response => {
            if (response.status === 201)
                return {}

            return response.json()
        })
}

export const postUser = (data = {}) => {
    return fetch(`${BASE_URL}/users`, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    }).then(data => data.json());
}

export const updateUser = (data) => {
    return fetch(`${BASE_URL}/users`, {
        method: 'PUT', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    }).then(data => data.json());
}