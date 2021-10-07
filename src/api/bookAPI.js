import { getRequest, putRequest } from "./util";

const BASE_URL = "/book";

export const getBooks = () => getRequest(`${BASE_URL}`);

export const getBook = (id) => getRequest(`${BASE_URL}/${id}`);

export const lendBook = (id, burrowedMemberId, burrowedDate) => 
    putRequest(`${BASE_URL}/${id}/burrow`, {burrowedMemberId, burrowedDate});