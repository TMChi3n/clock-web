import { productClient } from '../http-common';

const getAll = () => {
    return productClient.get('/getAll');
}

const add = data => {
    return productClient.post('/add', data);
}

const get = id => {
    return productClient.get(`/get/${id}`);
}

const update = (id, data) => {
    return productClient.put(`/edit/${id}`, data);
}

const remove = id => {
    return productClient.delete(`/delete/${id}`);
}

const search = query => {
    return productClient.get(`/search?query=${query}`);
}

export default { getAll, add, get, update, remove, search };
