import { Contact } from "./interfaces";

const APIURL = "http://localhost:3000";
const axios = require("axios");

export const getContacts = () => axios.get(`${APIURL}/contacts`);

export const addContact = (data: Contact) =>
  axios.post(`${APIURL}/contacts`, data);
export const editContact = (data: Contact) =>
  axios.put(`${APIURL}/contacts/${data.id}`, data);
export const deleteContact = (id: number) =>
  axios.delete(`${APIURL}/contacts/${id}`);
