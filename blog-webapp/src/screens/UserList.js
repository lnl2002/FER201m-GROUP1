import MenuBar from "../components/MenuBar";
import DefaultLayout from "../layouts/DefaultLayout";
import { useEffect, useState } from "react";
import { Col, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
function UserList() {
  const styles = {
    contentDiv: {
      display: "flex",
    },
    contentMargin: {
      marginLeft: "10px",
      width: "100%",
    },
  };
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
      //Delete event:
  const handleDelete = (Id) => {
    if (window.confirm("Do you remove product witdh ID" + Id)) {
      fetch(`http://localhost:9997/users/${Id}`, {
        method: "DELETE",
      }).then(() => {
        window.location.reload();
      });
    }
  };
  return (
    <DefaultLayout>
      

      <div style={styles.contentDiv}>
        <MenuBar></MenuBar>
        <div style={styles.contentMargin}>
        <Row>
      <Col xs={12}>
        <Row>
          <Col style={{ textAlign: "center" }}>
            <h2>List User</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Email</th>
                  <th>Pass</th>
                  <th>Role</th>
                  <th>Name</th>
                  <th>gender</th>
                  <th>phone</th>
                  <th>add</th>
                  <th colSpan={2}>Action</th>
                </tr>
              </thead>
              <tbody>
                {user.map((p) => (
                  <tr key={p.id}>
                    <td>{p.Id}</td>
                    <td>{p.email}</td>
                    <td>{p.password}</td>
                    <td>{p.role}</td>                 
                    <td>{p.name}</td>
                    <td>{p.gender}</td>
                    <td>{p.phone}</td>
                    <td>{p.address}</td>
                    <td>
                      <Link to={"/"} onClick={() => handleDelete(p.Id)}>Delete</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Col>
    </Row>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default UserList;