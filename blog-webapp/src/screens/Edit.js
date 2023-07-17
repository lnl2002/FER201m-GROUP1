import React, { useEffect,useState } from "react";
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Container } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
const Edit = () => {
    const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    thumbnail: "",
    introduce: "",
    categoryId: "",
    content: "",
    author: "",
    time: "",
    feedbackId: "",
    difficulty: "",
    preparationTime: "",
    cookingTime: "",
    servingSize: "",
    tableOfContents: "",
  });
  useEffect(() => {
    fetch(`http://localhost:9999/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setFormData(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [id]);
  
  const handleChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
       await fetch(`http://localhost:9999/blogs/${id}`, {
        method: "PUT", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      navigate("/manager/bloglist");
      // Handle successful response
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
        <h1>Nhập dữ liệu</h1>
    <form onSubmit={handleSubmit}>
      <label>
        Tiêu đề:
        <input
          type="text"
          value={formData.title}
          onChange={(e) => handleChange('title', e.target.value)}
          required
        />
      </label>
      <br />
      {/* <label>
        Thumbnail:
        <input
          type="text"
          value={formData.thumbnail}
          onChange={(e) => handleChange('thumbnail', e.target.value)}
          required
        />
      </label> */}
      <label>
      Thumbnail:
        <CKEditor
          editor={ClassicEditor}
          data={formData.thumbnail}
          onChange={(event, editor) => handleChange('thumbnail', editor.getData())}
          required
        />
      </label>
      <br />
      <label>
        Giới thiệu:
        <textarea
          value={formData.introduce}
          onChange={(e) => handleChange('introduce', e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Category ID:
        <input
          type="number"
          value={formData.categoryId}
          onChange={(e) => handleChange('categoryId', parseInt(e.target.value))}
          required
        />
      </label>
      <br />
      <label>
        Nội dung:
        <CKEditor
          editor={ClassicEditor}
          data={formData.content}
          onChange={(event, editor) => handleChange('content', editor.getData())}
          required
        />
      </label>
      <br />
      <label>
        Tác giả:
        <input
          type="text"
          value={formData.author}
          onChange={(e) => handleChange('author', e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Thời gian:
        <input
          type="text"
          value={formData.time}
          onChange={(e) => handleChange('time', e.target.value)}
          required
        />
      </label>
      <br />
      {/* <label>
        Feedback ID:
        <input
          type="text"
          value={formData.feedbackId}
          onChange={(e) => handleChange('feedbackId', e.target.value)}
          required
        />
      </label> */}
      <br />
      <label>
        Độ khó:
        <input
          type="text"
          value={formData.difficulty}
          onChange={(e) => handleChange('difficulty', e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Thời gian chuẩn bị:
        <input
          type="text"
          value={formData.preparationTime}
          onChange={(e) => handleChange('preparationTime', e.target.value)}
          required
          />
      </label>
      <br />
      <label>
        Thời gian nấu:
        <input
          type="text"
          value={formData.cookingTime}
          onChange={(e) => handleChange('cookingTime', e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Phục vụ số người:
        <input
          type="text"
          value={formData.servingSize}
          onChange={(e) => handleChange('servingSize', e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Chỉ mục:
        <CKEditor
          editor={ClassicEditor}
          data={formData.tableOfContents}
          onChange={(event, editor) => handleChange('tableOfContents', editor.getData())}
          required
        />
      </label>
      <br />
      <button type="submit">Lưu</button>
    </form>
    </Container>
  );
};

export default Edit;
