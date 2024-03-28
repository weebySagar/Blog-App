import InnerWrapper from "@components/ui/InnerWrapper";
import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import toast from "react-hot-toast";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { createBlog } from "../../../services/blogService";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  const handleAddBlog = () => {
    if (!title || !subtitle || !content) {
      return setError("Enter all fields");
    }
    setError("");
    toast.promise(createBlog(title, subtitle, content), {
      loading: "Creating Blog...",
      success: () => {
        setTitle("");
        setContent("");
      },
      error: err => err.message,
    });
  };
  return (
    <section className="create-blog">
      <InnerWrapper>
        <Container>
          <h3>Create Blog</h3>

          <div className="content-wrap">
            <Form.Group className="mb-3" controlId="formBasicTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Title"
                onChange={e => setTitle(e.target.value)}
                value={title}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicSubtitle">
              <Form.Label>Subtitle</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Subtitle"
                onChange={e => setSubtitle(e.target.value)}
                value={subtitle}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicContent">
              <Form.Label>Content</Form.Label>

              <ReactQuill theme="snow" value={content} onChange={setContent} />
              {error && <p className="fs-6 text-danger">{error}</p>}
            </Form.Group>

            <Button onClick={handleAddBlog}>Create Blog</Button>
          </div>
        </Container>
      </InnerWrapper>
    </section>
  );
};

export default CreateBlog;
