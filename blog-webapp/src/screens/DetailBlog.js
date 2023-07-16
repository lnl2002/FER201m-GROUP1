import DefaultLayout from "../layouts/DefaultLayout";
import { Container } from "react-bootstrap";
import { Accordion } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Row, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function DetailBlog() {
    const { pid } = useParams();
    const [category, setCategory] = useState([]);
    const [user, setUser] = useState([]);
    const [feedback, setFeedback] = useState([]);
    const [p, setBlog] = useState([]);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        userId: "",
        blogId: "",
        content: "",
        rate: "",
    });

    useEffect(() => {
        fetch("http://localhost:9999/blogs/" + pid)
            .then((resp) => resp.json())
            .then((data) => {
                setBlog(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    useEffect(() => {
        fetch("http://localhost:9999/categories")
            .then((resp) => resp.json())
            .then((data) => {
                setCategory(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    useEffect(() => {
        fetch("http://localhost:9999/users")
            .then((resp) => resp.json())
            .then((data) => {
                setUser(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    useEffect(() => {
        fetch("http://localhost:9999/feedbacks")
            .then((resp) => resp.json())
            .then((data) => {
                setFeedback(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch("http://localhost:9997/feedbacks", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                window.location.reload(); // Reload the page
            } else {
                console.log("Failed to submit feedback");
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (field, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };

    return (
        <DefaultLayout>
            {/* Có thể xóa container đi để thêm content vào đấy */}
            <Container fluid>
                <div className="test">
                    {/* ...existing code... */}
                    <div className="row">
                        <div class="col-sm-6">
                            <h4>
                                Tác Giả:  <span style={{ color: 'gray' }}>{p.author}</span>
                            </h4>

                        </div>
                        <div class="col-sm-6">
                            <h4>
                                Time:  <span style={{ color: 'gray' }}>{p.time}</span>
                            </h4>
                        </div>

                    </div>
                    <div className="row">
                        <div class="col-sm-3">
                            <h4>
                                Chuẩn bị
                            </h4>
                            <h5 style={{ color: 'red' }}>{p.preparationTime}</h5>
                        </div>
                        <div class="col-sm-3">
                            <h4>
                                Nấu/Nướng
                            </h4>
                            <h5 style={{ color: 'red' }}>{p.cookingTime}</h5>
                        </div>
                        <div class="col-sm-3">
                            <h4>
                                Khẩu phần
                            </h4>
                            <h5 style={{ color: 'red' }}>{p.servingSize}</h5>
                        </div>
                        <div class="col-sm-3">
                            <h4>
                                Độ khó
                            </h4>
                            <h5 style={{ color: 'red' }}>{p.difficulty}</h5>
                        </div>
                    </div>


                    <div className="mucluc">
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header > <Button className="buton" variant="success">Mục Lục</Button>{' '}</Accordion.Header>
                                <Accordion.Body style={{ color: '#ad954e' }} dangerouslySetInnerHTML={{ __html: p.tableOfContents }} />
                            </Accordion.Item>
                        </Accordion>
                    </div>
                    <Accordion >
                        <Accordion.Item >

                            <Accordion.Body dangerouslySetInnerHTML={{ __html: p.content }} />
                        </Accordion.Item>
                    </Accordion>
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div class="col-sm-6">
                                <label>
                                    <input
                                        type="textarea"
                                        placeholder="bình luận "
                                        value={formData.content}
                                        style={{ height: '100px', width: '500px' }}
                                        onChange={(e) => handleChange('content', e.target.value)}
                                        required
                                    />
                                </label>
                            </div>

                            <div class="col-sm-6">
                                <label className="mb-3">
                                    <input
                                        type="number"
                                        placeholder=" Đánh giá bài viết(1->5)"
                                        value={formData.rate}
                                        onChange={(e) => handleChange('rate', e.target.value)}
                                        required
                                    />
                                </label>
                                <br />
                                <label className="mb-3">
                                    <input
                                        type="checkbox"
                                        required
                                    />
                                    Hãy bình luận tích cực
                                </label> 
                                <br />
                                <button type="submit">Gửi</button>
                            </div>
                        </div>
                    </form>

                </div>
            </Container>
            {/* ...existing code... */}
            <Row>
          <Col>
 <Table>
 <thead>
                <tr>
                  <th></th>
                  <th></th>
                  <th></th>
                 
                </tr>
              </thead>
              <tbody>
              {feedback.map((u) => (
                  <tr key={(u.id)}>
                     <td>{user.map((s) => (s.id === u.userId && p.id === u.blogId ? s.name :""))}</td>
                    <td>{(p.id === u.blogId ? u.content:"")}</td>
                    <td>{user.map((s) =>(s.id === u.userId && p.id === u.blogId ? u.rate:""))} <span style={{ color: 'red' }}>&#9733;</span></td>
                    
                      
                  </tr>
                ))}
              </tbody>
              {/* <thead>
              <tr>
                  <th></th>
                  <th></th>
                </tr>
                </thead>
            <tbody>
            {user.map((p) => (
                <tr>
                <td>
                    { feedback.map((u) => (u.blogId === p.id ? u.content :""))}
                </td>
                <td style={{ color: 'red' }}> rate : {feedback.map((u) => (u.blogId === p.id ? u.rate :""))} <span>&#9733;</span> </td>
                </tr>
                ))}
            </tbody> */}
            </Table>
            </Col>
        </Row>
        </DefaultLayout>
    );
};
