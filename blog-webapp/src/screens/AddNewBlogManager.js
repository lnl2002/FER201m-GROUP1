import AdminLayout from "../layouts/AdminLayout"
import React, { useState } from 'react';
import '../styles/addNewBlogManager.css'
import { Button, Col, Container, Form, Row } from "react-bootstrap";
const AddNewBlogManager = () => {
    const [validated, setValidated] = useState(false);
    const [users, setUsers]  = useState([]);
    
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if(form.checkValidity() === false){
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
        }

        setValidated(true);
    }


    return (
        <AdminLayout>
            <div className="content add-new-manager">
                <Container fluid >
                    <Container style={{ backgroundColor: "#fff" }} >
                        <Form className="add-form" noValidate validated={validated} onSubmit={handleSubmit}>
                            <Row>
                                <Col md={6} >
                                    <h3>Account information</h3>
                                    <Form.Group className="form-input ">
                                        <Form.Label>Email <span style={{ color: "red" }}>*</span></Form.Label>
                                        <Form.Control
                                            placeholder="Enter email"
                                            type="email"
                                            name="email"
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Email was exsited
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group className="form-input">
                                        <Form.Label>Password <span style={{ color: "red" }}>*</span></Form.Label>
                                        <Form.Control
                                            placeholder="Enter password"
                                            type="password"
                                            name="password"
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Password need more than 8 characters and include at least one capital letter
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group className="form-input">
                                        <Form.Label>Confirm password <span style={{ color: "red" }}>*</span></Form.Label>
                                        <Form.Control
                                            placeholder="Confirm password"
                                            type="password"
                                            name="repassword"
                                            required
                                        />
                                    </Form.Group>
                                    <Form.Control.Feedback type="invalid">
                                        Do not match with password
                                    </Form.Control.Feedback>
                                </Col>
                                <Col md={6}>
                                    <h3>Manager information</h3>
                                    <Form.Group className="form-input ">
                                        <Form.Label>Name <span style={{ color: "red" }}>*</span></Form.Label>
                                        <Form.Control
                                            placeholder="Enter manager name"
                                            name="name"
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Can not empty
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group className="form-input ">
                                        <Form.Label>Gender <span style={{ color: "red" }}>*</span></Form.Label>
                                        <Form.Check
                                            type="radio"
                                            label="Male"
                                            name="gender"
                                        />
                                        <Form.Check
                                            type="radio"
                                            label="Female"
                                            name="gender"
                                        />

                                    </Form.Group>
                                    <Form.Group className="form-input">
                                        <Form.Label>Phone <span style={{ color: "red" }}>*</span></Form.Label>
                                        <Form.Control
                                            placeholder="Enter phone"
                                            type="text"
                                            pattern="^0\d{9}"
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Can not empty
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group className="form-input">
                                        <Form.Label>Address <span style={{ color: "red" }}>*</span></Form.Label>
                                        <Form.Control
                                            placeholder="Manager address"
                                            type="text"
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Can not empty
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="text-center">
                                    <Button className="btn-danger btn-cancel" >Cancel</Button>
                                    <Button className="btn-success" type="submit">Add</Button>
                                </Col>
                            </Row>

                        </Form>
                    </Container>
                </Container>
            </div>
        </AdminLayout>
    );

}

export default AddNewBlogManager;