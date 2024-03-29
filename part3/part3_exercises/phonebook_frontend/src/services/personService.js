import axios from 'axios'
const baseURL = '/api/persons'

const getAll = () => {
    const request = axios.get(baseURL)
    
    return request.then(response => {
        return response.data
    })
}

const createPerson = newObject => {
    const request = axios.post(baseURL, newObject) 
    return request.then(response => response.data)
}

const updatePerson = (newObject) => {
    const request = axios.put(`${baseURL}/${newObject.id}`, newObject)
    return request.then(response => response.data)
}

const deletePerson = (id) => {
    const request = axios.delete(`${baseURL}/${id}`)
    return request.then(response => {
        return getAll()
    }).catch(error => {
        throw error
    })
}

export default {getAll, createPerson, updatePerson, deletePerson}
