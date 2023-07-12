import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Form, Button, Modal } from 'react-bootstrap'
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../App';
import { SignIn } from '../screens/SignIn';
import { SignUp } from '../screens/SignUp';
import ForgotPassword from '../screens/ForgotPassword';

export default function HeaderFE() {
    const [show, setShow] = useState(false);
    const [formType, setFormType] = useState("");
    const [categories, setCategories] = useState([]);
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:9999/categories")
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    const openSignUp = () => {
        setShow(true)
        setFormType("sign-up")
    }

    const openSignIn = () => {
        setShow(true)
        setFormType("sign-in")
    }
    
    const openForgotPassword = () => {
        setShow(true)
        setFormType("forgot-password")
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

    //Search
    
    const handleSearch = (event) => {
        const form = event.currentTarget;
        if(search === ''){
            event.preventDefault();
            console.log("khong");

        } else {
            event.preventDefault();
            navigate(`/search/${search}`  );
        }
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
                        <Nav className='me-auto col-md-6'>
                            <Form className="d-flex w-75" onSubmit={handleSearch}>
                                <Form.Control
                                    type="text"
                                    placeholder="Tìm kiếm"
                                    className="me-2"
                                    aria-label="Search"
                                    value={search}
                                    onChange={e => setSearch(e.target.value)}
                                />
                                <Button type='submit' variant="success"><ion-icon name="search-outline"></ion-icon></Button>
                            </Form>
                        </Nav>

                        <Nav className='col-md-6 contact'>
                            <Nav.Link href="#home" className='contact-detail'> <ion-icon name="business-outline"></ion-icon>  Liên hệ</Nav.Link>
                            <Nav.Link href="#home" className='contact-detail'> <ion-icon name="people-outline"></ion-icon>  Về chúng tôi</Nav.Link>
                            {
                                currentUser == null &&
                                <>
                                    <Nav.Link href="#home" className='contact-detail' onClick={openSignUp}> <ion-icon name="mail-outline"></ion-icon> Đăng ký</Nav.Link>
                                    <Nav.Link href="#home" className='contact-detail' onClick={openSignIn}> <ion-icon name="mail-outline"></ion-icon> Đăng nhập</Nav.Link>
                                    <Nav.Link href="#home" className='contact-detail' onClick={openForgotPassword}> <ion-icon name="mail-outline"></ion-icon> for</Nav.Link>
                                </>
                            }
                            {
                                currentUser != null &&
                                <>
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
                                {
                                    formType === "forgot-password" &&
                                    <ForgotPassword openForgotPassword={openForgotPassword} hideForm={hideForm} />
                                }
                            </Modal.Body>
                        </Modal>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container style={{ backgroundColor: "white" }} className="category-container">
                <ul className='d-flex category p-0 text-uppercase'>
                    <li><NavLink to={"/"} className={({ isActive }) => isActive ? 'active-category' : ''}>Trang chủ</NavLink></li>
                    {
                        categories.map(category =>
                            <li>
                                <NavLink to={"/" + category.id} className={({ isActive }) => isActive ? 'active-category' : ''} >
                                    {category.categoryName}
                                </NavLink>
                            </li>
                        )
                    }
                </ul>
            </Container>
        </>
    )
}