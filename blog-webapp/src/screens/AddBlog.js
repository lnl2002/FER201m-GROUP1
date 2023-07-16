import React, { useState } from "react";
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Container } from "react-bootstrap";

const AddBlog = () => {
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

  const handleChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(" http://localhost:9997/blogs", {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
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
          type="file"
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
      {/* <label>
        Category ID:
        <input
          type="text"
          value={formData.categoryId}
          onChange={(e) => handleChange('categoryId', e.target.value)}
          required
        />
      </label> */}
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
      <button type="submit">Tải lên</button>
    </form>
    </Container>
  );
};

export default AddBlog;
// import React, { Component } from 'react';
// import {Editor as ClassicEditor} from 'ckeditor5-custom-build/build/ckeditor';
// import  Editor  from 'ckeditor5-custom-build/build/ckeditor';
// import { CKEditor } from '@ckeditor/ckeditor5-react'



// const AddBlog = () => {
//     const API_URI = "https://noteyard-backend.herokuapp.com"
//     const UPLOAD_ENDPOINT = "api/blogs/uploadImg";

//     function uploadAdapter(loader){
//         return{
//             upload : () => {
//                 return new Promise((resolve , reject)=>{
//                     const body =new FormData();
//                     loader.file.then((file)=>{
//                         body.append("uploadImg",file);
//                         fetch(`${API_URI}/${UPLOAD_ENDPOINT}` , {
//                             method : "post",
//                             body : body
//                         })
//                         .then((res =>res.json()))
//                         .then((res)=>{
//                             resolve({default : `${API_URI}/${res.url}`})
//                         })
//                         .catch((err)=>{
//                             reject(err);
//                         })
                        
//                     })
//                 })
//             }  
//         }
//     }
//     function uploadPlugin(editor){
//         editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
//             return uploadAdapter(loader);
//         }
//     }
//         return (
//             <div className="App">
//                 {/* <h2>Using CKEditor 5 from online builder in React</h2> */}
//                 <CKEditor
//                  config={{
//                     extraPlugins: [uploadPlugin]
//                  }}
//                     editor={ Editor }
//                     data="<p>Hello from CKEditor 5!</p>"
//                     onReady={ editor => {
//                         // You can store the "editor" and use when it is needed.
//                         console.log( 'Editor is ready to use!', editor );
//                     } }
//                     onChange={ ( event, editor ) => {
//                         const data = editor.getData();
//                         console.log( { event, editor, data } );
//                     } }
//                     onBlur={ ( event, editor ) => {
//                         console.log( 'Blur.', editor );
//                     } }
//                     onFocus={ ( event, editor ) => {
//                         console.log( 'Focus.', editor );
//                     } }
//                 />
//             </div>
//         );
    
// }

// export default AddBlog;
