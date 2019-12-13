import axios from 'axios';

export const getNotes = () => {
    return axios.get('http://localhost:4000/')
        .then(res => res.data);
};

export const insertNote = payload => {
    return axios.post('http://localhost:4000', payload)
        .then(res => res.data);
}

export const updateNote = payload => {
    return axios.patch(`http://localhost:4000/note/${payload._id}`, payload)
        .then(res => res.data);
}

export const removeNote = id => {
    return axios.delete(`http://localhost:4000/note/${id}`)
        .then(res => res.data);
}