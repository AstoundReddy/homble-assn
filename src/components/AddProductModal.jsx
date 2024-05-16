import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function AddProductModal({ show, handleClose, handleSubmit }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [allergen_info, setAllergenInfo] = useState("");

  const submitForm = (event) => {
    event.preventDefault();
    handleSubmit({ name, description, allergen_info });
    setName("");
    setDescription("");
    setAllergenInfo("");
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={(e) => submitForm(e)}>
          <Form.Group className="m-1">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required // Add the 'required' attribute for validation
            />
            {/* {name.length === 0 && <Form.Text className="text-danger">Name is required</Form.Text>} */}
          </Form.Group>
          <Form.Group className="m-1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required // Add the 'required' attribute for validation
            />
            {/* {description.length === 0 && <Form.Text className="text-danger">Description is required</Form.Text>} */}
          </Form.Group>
          <Form.Group className="m-1">
            <Form.Label>Allergen Info</Form.Label>
            <Form.Control
              type="text"
              value={allergen_info}
              onChange={(e) => setAllergenInfo(e.target.value)}
              required // Add the 'required' attribute for validation
            />
            {/* {allergen_info.length === 0 && <Form.Text className="text-danger">Allergen Info is required</Form.Text>} */}
          </Form.Group>
          <Button type="submit" className="my-2 position-relative">
            Add Product
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default AddProductModal;
