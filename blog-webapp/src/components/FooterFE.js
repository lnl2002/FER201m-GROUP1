import { Container, Col, Row } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar'
import Logo from "../assets/images/logo.png"
export default function FooterFE() {
    return (
        <Container fluid className="footer ">
            <Container>
                <Row>
                    <Col md={4} sm={12}>
                        <div className="footer-left">
                            <Navbar.Brand href="#home" className='logo-container'><img src={Logo} alt='Bếp của Bố' /></Navbar.Brand>
                            <div className="left-content">
                                <p>Know - Love - Share</p>
                                <p>Know: Hiểu rõ điều đang làm và luôn học hỏi mỗi ngày</p>
                                <p>Love: Đặt cái tâm, cái tình vào mỗi công thức</p>
                                <p>Share: Chia sẻ niềm hạnh phúc qua những món ăn</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={4} sm={12}>
                        <div className="footer-middle">
                            <div className="middle-title">Liên hệ</div>
                            <div className="middle-content">
                                <p>
                                    <ion-icon name="location"></ion-icon>Đại học FPT Campus Hòa Lạc, Hà Nội
                                </p>
                                <p>
                                    <ion-icon name="call"></ion-icon>0912345678
                                </p>
                                <p>
                                    <ion-icon name="mail"></ion-icon>lamlnhe161656@fpt.edu.vn
                                </p>
                                <p>
                                    <ion-icon name="rocket"></ion-icon>Made by <span style={{ fontWeight: '700px' }}>Group 1 - SE1718</span>
                                </p>
                            </div>

                        </div>
                    </Col>
                    <Col md={4} sm={12}>
                        <div className="footer-right">
                            <div className="right-title">Theo dõi chúng tôi</div>
                            <div className="right-content">
                                <p><a href="#gt">Giới thiệu</a></p>
                                <p><a href="#gt">Chính sách quảng cáo</a></p>
                                <p><a href="#gt">Chính sách bảo mật</a></p>
                                <p><a href="#gt">Miễn trừ trách nhiệm</a></p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container><div className="footer-footer">Copyright @ 2023 <span style={{ fontWeight: '700' }}>Group 1 - SE1718</span></div></Container>
        </Container>
    )
}