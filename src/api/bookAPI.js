import { getRequest, putRequest, deleteRequest } from "./util";

const BASE_URL = "/book";

export const getBooks = () => getRequest(`${BASE_URL}`);

export const getBook = (id) => getRequest(`${BASE_URL}/${id}`);

export const lendBook = (id, burrowedMemberId, burrowedDate) => 
    putRequest(`${BASE_URL}/${id}/burrow`, {burrowedMemberId, burrowedDate});

export const returnBook = (id) => putRequest(`${BASE_URL}/${id}/return`);

export const deleteBook = (id) => deleteRequest(`${BASE_URL}/${id}`);