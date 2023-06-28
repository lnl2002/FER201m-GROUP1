import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Form, Button, Modal, InputGroup } from 'react-bootstrap'
import { useState } from 'react';
import { Auth } from '../screens/auth';
import { SignIn } from '../screens/auth/components/SignIn';
import { SignUp } from '../screens/auth/components/SignUp';
import Logo from "../assets/images/logo.png"

export default function HeaderFE() {
    const [show, setShow] = useState(false);
    const [formType, setFormType] = useState("");

    const openSignUp = () => {
        setShow(true)
        setFormType("sign-up")
    }

    const openSignIn = () => {
        setShow(true)
        setFormType("sign-in")
    }

    const hideForm = () => {
        setShow(false);
        setFormType("");
    }

    return (
        <>
            <Navbar className='header' >
                <Container>
                    <Navbar.Brand href="#home" className='logo-container'><img src={Logo} alt='Bếp của Bố' /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='me-auto col-md-8'>
                            <Form className="d-flex w-75">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="success"><ion-icon name="search-outline"></ion-icon></Button>
                            </Form>
                        </Nav>

                        <Nav className='col-md-4 contact'>
                            <Nav.Link href="#home" className='contact-detail'> <ion-icon name="business-outline"></ion-icon>  Liên hệ</Nav.Link>
                            <Nav.Link href="#home" className='contact-detail'> <ion-icon name="people-outline"></ion-icon>  Về chúng tôi</Nav.Link>
                            <Nav.Link href="#home" className='contact-detail' onClick={openSignUp}> <ion-icon name="mail-outline"></ion-icon> Đăng ký</Nav.Link>
                            <Nav.Link href="#home" className='contact-detail' onClick={openSignIn}> <ion-icon name="mail-outline"></ion-icon> Đăng nhập</Nav.Link>
                        </Nav>

                        <Modal show={show} onHide={hideForm} className='regist__modal'>
                            <Modal.Header className='bg-warning d-flex justify-content-center' closeButton={false}>
                                <img style={{ maxHeight: "100px" }} src='assets/images/logo.png' alt='Bếp của Bố' />
                            </Modal.Header>
                            <Modal.Body>
                                {
                                    formType === "sign-up" &&
                                    <SignUp openSignIn={openSignIn}/>
                                }
                                {
                                    formType === "sign-in" &&
                                    <SignIn openSignUp={openSignUp}/>
                                }
                            </Modal.Body>
                        </Modal>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}