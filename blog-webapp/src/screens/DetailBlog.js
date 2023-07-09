import DefaultLayout from "../layouts/DefaultLayout";
import { Container } from "react-bootstrap";
import { Accordion } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
export default function DetailBlog() {
    const { pid } = useParams();
    const [category, setCategory] = useState([]);
    const [user, setUser] = useState([]);
    const [feedback, setFeedback] = useState([]);
    const [p, setBlog] = useState([]);
    useEffect(() => {
        fetch("http://localhost:9997/blogs/" + pid )
          .then((resp) => resp.json())
          .then((data) => {
            setBlog(data);
          })
          .catch((err) => {
            console.log(err.message);
          });
      }, []);
      useEffect(() => {
        fetch("http://localhost:9997/categories")
          .then((resp) => resp.json())
          .then((data) => {
            setCategory(data);
          })
          .catch((err) => {
            console.log(err.message);
          });
      }, []);
      useEffect(() => {
        fetch("http://localhost:9997/users")
          .then((resp) => resp.json())
          .then((data) => {
            setUser(data);
          })
          .catch((err) => {
            console.log(err.message);
          });
      }, []);
      useEffect(() => {
        fetch("http://localhost:9997/feedbacks")
          .then((resp) => resp.json())
          .then((data) => {
            setFeedback(data);
          })
          .catch((err) => {
            console.log(err.message);
          });
      }, []);
    return (
        <DefaultLayout>
            {/* Có thể xóa container đi để thêm content vào đấy */}
            <Container fluid >
                <div className="test">
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
                                
                                <Accordion.Body  dangerouslySetInnerHTML={{ __html: p.content }} />
                            </Accordion.Item>
                        </Accordion>
                    {/* <div>
                        <div>
                            <p><b style={{ color: ' #f2b705' }}>Thịt heo nướng giấy bạc</b> là một trong những món ăn ngon mà lại đơn giản để các bạn có thể thực hiện tại nhà, nguyên liệu thịt heo có thể giúp cho chúng ta chế biến thành đa dạng các món ăn từ đơn giản cho đến phức tạp, hôm nay YummyDay sẽ giới thiệu đến các bạn cách thực hiện món thịt heo nướng giấy bạc thơm ngon và đậm đà hương vị. Hãy cùng theo dõi bài viết dưới đây nhé.</p>
                            <img style={{ paddingLeft: '25%' }} src="https://yummyday.vn/uploads/images/thit-heo-nuong-giay-bac-5.jpg" alt=""></img>
                            <h5 className="cuoianh">
                                Món thịt heo nướng giấy bạc thơm ngon hấp dẫn
                            </h5>
                        </div>
                        <div>
                            <h3>I. Nguyên liệu cần chuẩn bị làm thịt heo nướng giấy bạc</h3>
                            <div className="row">
                                <div class="col-sm-6">
                                    <p>
                                        Thịt ba chỉ 300 gram<br /><br />
                                        Sả 4 cây<br /><br />
                                        Sả băm 20 gram<br /><br />
                                        1 củ gừng băm 5 gram<br /><br />
                                        1 húng quế 10 gram<br /><br />
                                        1 củ hành tím băm 20 gram<br /><br />
                                        1 muỗng hạt nêm<br /><br />
                                        1 muỗng nước mắm<br /><br />

                                        ½ muỗng đường<br /><br />

                                        ½ muỗng bột ngọt
                                    </p>
                                </div>
                                <div class="col-sm-6">
                                    <p>
                                        <img src="https://yummyday.vn/uploads/images/thit-heo-nuong-giay-bac-4.jpg" alt=""></img>
                                        <h5 className="cuoianh">
                                            Thịt ba chỉ tươi ngon
                                        </h5>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3>II. Cách thực hiện món thịt heo nướng giấy bạc</h3>
                            <div className="row">
                                <div class="col-sm-6">
                                    <p>
                                        <img src="https://yummyday.vn/uploads/images/thit-heo-nuong-giay-bac-1.jpg" alt=""></img>
                                        <h5 className="cuoianh">
                                            Ướp gia vị
                                        </h5>
                                    </p>
                                    <p>
                                        <img src="https://yummyday.vn/uploads/images/thit-heo-nuong-giay-bac-2.jpg" alt=""></img>
                                        <h5 className="cuoianh">
                                            Nướng thịt heo nướng giấu bạc
                                        </h5>
                                    </p>
                                </div>
                                <div class="col-sm-6">
                                    <h4>Sơ chế nguyên liệu</h4>
                                    <p>
                                        - Thịt heo sau khi mua về các bạn đem đi rửa cho thật sạch rồi sau đó thái thành từng miếng vừa ăn và để cho ráo nước<br />
                                        - Sả cây các bạn cắt bỏ phần cuống, rửa sạch và cắt thành từng khúc rồi đập dập<br />
                                        - Phần sả còn lại các bạn đem đi băm nhuyễn rồi để riêng ra<br />
                                        - Gừng đem cạo bỏ phần vỏ rồi rửa sạch và băm nhuyễn<br />
                                        - Hành tím cắt bỏ phần cuống rồi rửa sạch và băm nhuyễn và để riêng ra một cái chén<br />
                                    </p>
                                    <p className="cuoianh">
                                        Thịt heo khi nướng đã rất thơm và ngon nhưng khi kết hợp cùng lá lốt mùi vị lại được nâng lên rất nhiều, đặc biệt món <b style={{ color: ' #f2b705' }}>thịt heo nướng lá lốt</b> lại vô cùng bắt mắt về hình thức, xem công thức ngay nào!
                                    </p>
                                    <h4>Cách thực hiện món thịt heo nướng giấy bạc</h4>
                                    <p>
                                        Bước 1: thịt heo sau khi sơ chế các bạn đem đi ướp chung với gia vị: 1 muỗng hạt nêm, 1 muỗng nước mắm, nửa muỗng mì chính, nửa muỗng đường rồi trộn lên cho thịt được thấm đều gia vị.<br />
                                        Bước 2: Các bạn lấy 1 tấm giấy bạc rồi lót một miếng lá chuối lên, sau đó cho ít sả lót lên trên lá chuối rồi tiếp theo, cho thịt heo đã được ướp vào trải cho đều, cho ít hành tím đã được đập dập hoặc hành nguyên củ, sả dã dập, thêm vài trái ớt (tuỳ thuộc vào sở thích của các bạn), sau đó tiến hành gói lại.<br />
                                        Bước 3: Các bạn cho thịt lên trên bếp từ và nướng ở nhiệt độ 500 độ C nướng trong khoảng 30 đến 40 phút. Hoặc các bạn có thể nướng trên lửa than, nếu như dùng lò nướng thì tốt nhất nên để nhiệt độ trong khoảng 250 độ C!<br />
                                        Bước 4: Sau khi nướng thấy thịt heo đã chín thì các bạn lấy ra và cắt thành từng lát mỏng, sau đó xếp lên dĩa và cùng thưởng thức. Thịt heo nướng khi chín có thể ăn kèm chung với rau sống và chấm muối ớt xanh tùy theo sở thích của mỗi người mà có thể trình bày nhiều loại rau khác nhau và nước chấm tùy thích!
                                    </p>
                                    <p className="cuoianh">
                                        <b style={{ color: ' #f2b705' }}>Heo nướng giả cầy</b>  là món ăn yêu thích của rất nhiều người, không cần phải đến hàng quán nữa vì bây giờ bạn đã có thể thực hiện món ăn ngay tại nhà!
                                    </p>
                                </div>

                            </div>
                        </div>
                        <div>
                            <h3>III. Bí quyết cho món thịt heo nướng giấy bạc ngon hơn</h3>
                            <div className="row1">
                                <div class="col-sm-12">
                                    <p>
                                        - Để có được món thịt heo nướng giấy bạc thơm ngon trước tiên các bạn cần phải chọn lựa những nguyen liệu thật tươi và ngon để cho món ăn sau khi chế biến được ngon hơn<br />

                                        - Nên ưu tiên chọn thịt heo rừng vì sau khi nướng thịt sẽ dai và thơm ngon hơn, chọn những miếng thịt tươi, không bị thối, màu đẹp, không bị tái hay có mùi lạ.<br />

                                        - Sả, gừng nên chọn những loại tươi và không bị thối<br />

                                        - Khi ướp thịt các bạn có thể điều chỉnh sao cho phù hợp với khẩu vị của cả gia đình, đồng thời, có thể ướp thịt từ hôm trước rồi để tủ lạnh và đem ra nướng sau để cho thịt được thấm đều hơn, sau khi nướng sẽ ngon hơn.<br />

                                        - Các bạn có thể nướng thịt bằng lò vi sóng hoặc bằng than, tùy sở thích, nhưng vẫn ưu tiên nướng thịt bằng bếp than thì thịt sẽ ngon và thơm hơn.
                                    </p>
                                    <p className="cuoianh">
                                        <b style={{ color: ' #f2b705' }}>Sườn heo nướng</b> Sườn heo nướng mật ong ngọt thơm ngay từ miếng đầu tiên thưởng thức nhưng công thức lại vô cùng đơn giản, ngại gì mà không bắt tay ngay vào thực hiện món ăn này!
                                    </p>
                                </div>

                            </div>
                        </div>
                        <div>
                            <h3>IV. Thành phẩm món thịt heo nướng giấy bạc đậm đà hương vị</h3>
                            <div className="row">
                                <div class="col-sm-6">
                                    <p>
                                        - Món thịt heo nướng giấy bạc sau khi chế biến có mùi thơm đặc trưng<br />

                                        - Khi ăn thì có hương vị đậm đà và chuẩn vị<br />

                                        - Thịt sau khi nướng không bị quá khô, không quá dai, thịt được chín tới và dai mềm ngon miêng<br />

                                        - Các bạn có thể ăn kèm thịt heo nướng giấy bạc chung với các loại rau mà bạn yêu thích như rau sống, rau thơm, xà lách.<br />
                                        Trên đây là một số thông tin về cách chế biến món thịt heo nướng giấy bạc thơm ngon và đậm đà hương vị mà các bạn có thể tự chế biến ở nhà, chỉ với những nguyên liệu đơn giản mà chúng ta có thể dễ dàng tìm kiếm được là các bạn đã có thể chế biến thành công món ăn thịt heo nướng giấy bạc vừa lạ miệng mà vừa thơm ngon rồi đó. Còn gì bằng vào những ngày cuối tuần cả nhà cùng nhau quây quần bên bếp than và nướng thịt rồi thưởng thức cùng nhau phải không? Món ăn tuy đơn giản nhưng lại cho ra hương vị thơm ngon đặc biệt và rất tốt cho sức khỏe của chúng ta, còn chần chờ gì nữa mà không nhanh chân vào bếp để thực hiện món thịt heo nướng giấy bạc ngay để có được món ăn ngon cho cả gia đình mình cùng thưởng thức nhé. YummyDay chúc các bạn thành công nhé.
                                    </p>
                                </div>
                                <div class="col-sm-6">
                                    <p>
                                        <img src="https://yummyday.vn/uploads/images/thit-heo-nuong-giay-bac-3.jpg" alt=""></img>
                                        <h5 className="cuoianh">
                                            Thành phẩm món thịt heo nướng giấy bạc
                                        </h5>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <>
                        <div className="row">
                            <div class="col-sm-6">
                                <FloatingLabel controlId="floatingTextarea2" label="Comments">
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Leave a comment here"
                                        style={{ height: '100px' }}
                                    />
                                </FloatingLabel>
                            </div>
                            <div class="col-sm-6">
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Check me out" />
                                    </Form.Group>
                                    <Button variant="warning" type="submit">
                                        Submit
                                    </Button>
                                </Form>
                            </div>
                        </div>
                    </>
                </div>
            </Container>
            {/* <Row>
      <Col xs={12}>
        <h2>Detail Product</h2>
        <div>Product ID:{p.title}</div>
        <div>Product Name:{p.content}</div>
        
      </Col>
    </Row> */}
        </DefaultLayout>
    );
};