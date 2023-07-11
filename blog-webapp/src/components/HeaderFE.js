import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Form, Button, Modal } from 'react-bootstrap'
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../App';
import { SignIn } from '../screens/SignIn';
import { SignUp } from '../screens/SignUp';
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

    const [currentUser, setCurrentUser] = useState();
    const { user, setUser } = useContext(UserContext);
    useEffect(() => {
        setCurrentUser(user)
    }, [user])

    const [showLogout, setShowLogout] = useState(false);
    const handleLogout = () => {
        setShowLogout(true);
        setUser("");
        setTimeout(() => {
            setShowLogout(false)
        }, 2500)
        window.location.reload()
    }

    return (
        <>
            <Navbar className='header' >
                <Container>
                    <Link to="/" className='logo-container'>
                        <img src='../../../assets/images/logo.png' alt='Bếp của Bố' />
                    </Link>
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
                            {
                                currentUser == null &&
                                <>
                                    <Nav.Link href="#home" className='contact-detail' onClick={openSignUp}> <ion-icon name="mail-outline"></ion-icon> Đăng ký</Nav.Link>
                                    <Nav.Link href="#home" className='contact-detail' onClick={openSignIn}> <ion-icon name="mail-outline"></ion-icon> Đăng nhập</Nav.Link>
                                </>
                            }
                            {
                                currentUser != null &&
                                <>
                                    <p>{currentUser.name}</p>
                                    <Nav.Link href="#home" className='contact-detail' onClick={handleLogout}> <ion-icon name="mail-outline"></ion-icon> Đăng xuất</Nav.Link>
                                </>
                            }
                        </Nav>

                        <Modal show={show} onHide={hideForm} className='regist__modal'>
                            <Modal.Header className='bg-warning d-flex justify-content-center' closeButton={false}>
                                <img style={{ maxHeight: "100px" }} src='assets/images/logo.png' alt='Bếp của Bố' />
                            </Modal.Header>
                            <Modal.Body>
                                {
                                    formType === "sign-up" &&
                                    <SignUp openSignIn={openSignIn} hideForm={hideForm} />
                                }
                                {
                                    formType === "sign-in" &&
                                    <SignIn openSignUp={openSignUp} hideForm={hideForm} />
                                }
                            </Modal.Body>
                        </Modal>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}