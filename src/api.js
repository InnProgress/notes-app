import axios from 'axios';

const url = "https://notes-rest-api-node.herokuapp.com";

export const getNotes = () => {
    return axios.get(url)
        .then(res => res.data);
};

export const insertNote = payload => {
    return axios.post(url, payload)
        .then(res => res.data);
}

export const updateNote = payload => {
    return axios.patch(`${url}/note/${payload._id}`, payload)
        .then(res => res.data);
}

export const removeNote = id => {
    return axios.delete(`${url}/note/${id}`)
        .then(res => res.data);
}