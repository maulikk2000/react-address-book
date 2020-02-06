import React from "react";
import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ContactForm from "./ContactForm";
import "./HomePage.css";
import { getContacts, deleteContact } from "./requests";
import { observer } from "mobx-react";
import { Contact, HomePageProps } from "./interfaces";
const HomePage: React.SFC<HomePageProps> = ({
  contactsStore
}: HomePageProps) => {
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [initialized, setInitialized] = useState(false);
  const [selectedContact, setSelectedContact] = useState({});
  const openModal = () => {
    setOpenAddModal(true);
  };
  const closeModal = () => {
    setOpenAddModal(false);
    setOpenEditModal(false);
    getData();
  };
  const cancelAddModal = () => {
    setOpenAddModal(false);
  };
  const editContact = (contact: Contact) => {
    setSelectedContact(contact);
    setOpenEditModal(true);
  };
  const cancelEditModal = () => {
    setOpenEditModal(false);
  };
  const getData = async () => {
    const response = await getContacts();
    contactsStore.setContacts(response.data);
    setInitialized(true);
  };
  const deleteSelectedContact = async (id: number) => {
    await deleteContact(id);
    getData();
  };
  useEffect(() => {
    if (!initialized) {
      getData();
    }
  });
  return (
    <div className="home-page">
      <h1>Contacts</h1>
      <Modal show={openAddModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ContactForm
            edit={false}
            onSave={closeModal.bind(this) as any}
            onCancelAdd={cancelAddModal as any}
            contactsStore={contactsStore}
          />
        </Modal.Body>
      </Modal>
      <Modal show={openEditModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ContactForm
            edit={true}
            onSave={closeModal.bind(this)}
            contact={selectedContact as Contact}
            onCancelEdit={cancelEditModal}
            contactsStore={contactsStore}
          />
        </Modal.Body>
      </Modal>
      <ButtonToolbar onClick={openModal}>
        <Button variant="outline-primary">Add Contact</Button>
      </ButtonToolbar>
      <br />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>City</th>
            <th>Country</th>
            <th>Postal Code</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Age</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {contactsStore.contacts.map((c: any) => (
            <tr key={c.id}>
              <td>{c.firstName}</td>
              <td>{c.lastName}</td>
              <td>{c.address}</td>
              <td>{c.city}</td>
              <td>{c.country}</td>
              <td>{c.postalCode}</td>
              <td>{c.phone}</td>
              <td>{c.email}</td>
              <td>{c.age}</td>
              <td>
                <Button
                  variant="outline-primary"
                  onClick={editContact.bind(this, c)}
                >
                  Edit
                </Button>
              </td>
              <td>
                <Button
                  variant="outline-primary"
                  onClick={deleteSelectedContact.bind(this, c.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
export default observer(HomePage);
