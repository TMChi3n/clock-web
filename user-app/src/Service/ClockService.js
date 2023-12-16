import {productClient} from '../http-common';

const getAll = () => {
    return productClient.get('/getAll');
}

const get = id => {
    return productClient.get(`/get/${id}`);
}

const search = query => {
    return productClient.get(`/search?query=${query}`);
}

export default {get, getAll, search};