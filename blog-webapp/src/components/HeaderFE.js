import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Form, Button } from 'react-bootstrap'
export default function HeaderFE() {
    return (
        <>
            <Navbar className='header' >
                <Container>
                    <Navbar.Brand href="#home" className='logo-container'><img src='assets/images/logo.png' alt='Bếp của Bố' /></Navbar.Brand>
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
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}