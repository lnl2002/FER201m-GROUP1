import MenuBar from "../components/MenuBar";
import DefaultLayout from "../layouts/DefaultLayout";
import React, { useState, useEffect } from 'react';

import ReactPaginate from 'react-paginate';
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
  const [pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = 3;
  const pagesVisited = pageNumber * itemsPerPage;
  const pageCount = Math.ceil(p.length / itemsPerPage);

  useEffect(() => {
    fetch("http://localhost:9999/blogs")
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

  //Delete event:
  const handleDelete = (id) => {
    if (window.confirm("Do you remove product witdh ID" + id)) {
      fetch(`http://localhost:9999/blogs/${id}`, {
        method: "DELETE",
      }).then(() => {
        window.location.reload();
      });
    }
  };

  const displayData = p
    .slice(pagesVisited, pagesVisited + itemsPerPage)
    .map((p) => (
      <tr key={p.id}>
        <td class="col-sm-1">{p.id}</td>
        <td class="col-sm-3">{p.title}</td>
        <td class="col-sm-6">
          <div
            style={{ width: "auto", height: "360px" }}
            dangerouslySetInnerHTML={{ __html: p.thumbnail }}
          />
        </td>
        <td class="col-sm-1">
          <Link to={"/manager/bloglist/edit/" + p.id}>Edit</Link>
        </td>
        <td class="col-sm-1">
          <Link to={""} onClick={() => handleDelete(p.id)}>
            Delete
          </Link>
        </td>
      </tr>
    ));

  const changePage = ({ selected }) => {
    setPageNumber(selected);
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
                  <h2>List Blogs</h2>
                </Col>
              </Row>
              <Row>
                <Col style={{ textAlign: "right" }}>
                  <Link to="/manager/bloglist/addblog">Create new Blog</Link>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Table>
                    <thead>
                      <tr>
                        <th class="col-sm-1">Id</th>
                        <th class="col-sm-3">Title</th>
                        <th class="col-sm-6">Thumbnail</th>
                        <th class="col-sm-2" colSpan={2}>
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>{displayData}</tbody>
                  </Table>
                </Col>
              </Row>
              <Row>
                <Col>
                 <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"pagination justify-content-center"}
                    activeClassName={"active"}
                  />
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