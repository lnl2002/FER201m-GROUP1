import React, { useEffect, useState, useRef } from 'react';
import { Button, Table } from 'react-bootstrap'
import 'datatables.net-dt/js/dataTables.dataTables.js';
import 'datatables.net-dt/css/jquery.dataTables.css';
import $ from 'jquery';
import AdminLayout from '../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify'

const FeedbackList = () => {
    const tableRef = useRef(null);
    const [feedbackList, setFeedbackList] = useState([]);
    const [users, setUsers] = useState([]);
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch("http://localhost:9999/feedbacks")
            .then(res => res.json())
            .then(data => {
                setFeedbackList(data);
            })
    }, [])

    useEffect(() => {
        fetch("http://localhost:9999/blogs")
            .then(res => res.json())
            .then(data => {
                setBlogs(data);
            })
    }, [])


    useEffect(() => {
        fetch("http://localhost:9999/users")
            .then(res => res.json())
            .then(data => {
                setUsers(data);
            })
    }, [])

    useEffect(() => {
        if (feedbackList.length > 0) {
            $(tableRef.current).DataTable();
        }
    }, [feedbackList]);

    //Get current user
    const [currentUser, setCurrentUser] = useState(localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : JSON.parse(sessionStorage.getItem("user")));
    const [user, setUser] = useState(localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : JSON.parse(sessionStorage.getItem("user")))
    useEffect(() => {
        if (localStorage.getItem("user")) {
            setCurrentUser(user);
        } else if (sessionStorage.getItem("user")) {
            setCurrentUser(user);
        }
    }, [user])

    //Navigate
    const navigate = useNavigate();

    //Authorization
    if (currentUser == null || currentUser.role ==="Viewer") {
        setTimeout(() => {
            navigate("/");
            toast.error("Không có quyền truy cập")
        }, 150)
    } else if (currentUser.role === "Manager") {
        setTimeout(() => {
            navigate("/manager/blogs");
            toast.error("Không có quyền truy cập")
        }, 150)
    }

    return (
        <AdminLayout>
            <div className="content">
                <Table
                    id="feedbackTable"
                    ref={tableRef}
                    className="display table-bordered"
                    style={{ width: "100%" }}
                    striped
                    hover
                >
                    <thead >
                        <tr>
                            <th>ID</th>
                            <th>Blog</th>
                            <th>User</th>
                            <th>Content</th>
                            <th>Rate</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            feedbackList.map(feedback =>
                                <tr key={feedback.id}>
                                    <td>{feedback.id}</td>
                                    <td>
                                        {blogs.map(blog => blog.id === feedback.blogId ? blog.title : "")}
                                    </td>
                                    <td>
                                        {
                                            users.map(user => user.id === feedback.userId ? user.email : "")
                                        }
                                    </td>
                                    <td>
                                        {feedback.content}
                                    </td>
                                    <td>
                                        {Array.from({ length: feedback.rate }, (_, index) => (
                                            <ion-icon key={index} name="star" style={{ color: "#f2b705" }}></ion-icon>
                                        ))}
                                    </td>

                                    <td><Button className='btn btn-primary'>View</Button></td>
                                </tr>
                            )
                        }

                    </tbody>
                </Table>
            </div>
        </AdminLayout>
    );

}

export default FeedbackList;