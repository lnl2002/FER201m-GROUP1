import DefaultLayout from "../layouts/DefaultLayout";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
export default function Home() {
    const [category, setCategory] = useState([]);
    const [user, setUser] = useState([]);
    const [feedback, setFeedback] = useState([]);
    const [p, setBlog] = useState([]);
    useEffect(() => {
        fetch("http://localhost:9997/blogs")
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
                <div className="test" style={{height: '56vh'}}>Middle</div>
                <tbody>
                {p.map((p) => (
                  <tr key={p.id}>
                    
                    <td>
                      <Link to={"/blogs/detail/" + p.id}>{p.title}</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Container>
        </DefaultLayout>
    )
}