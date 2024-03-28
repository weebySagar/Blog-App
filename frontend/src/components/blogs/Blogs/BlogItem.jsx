import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import formatDate from "../../../utils/formattedDate";

const BlogItem = ({
  _id,
  title,
  content,
  author,
  createdAt,
  isMyBlog = false,
}) => {
  const handleDelete = _id => {};
  return (
    <Link to={`/blogs/${_id}`}>
      <Card>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title as={"h4"}>{title}</Card.Title>
          <Card.Text className="fs-6 mt-3">
            {content.substring(0, 50)}...
          </Card.Text>
          <div className="d-flex justify-content-between align-items-center mt-3">
            <p className="fs-6">{formatDate(createdAt)}</p>
            <p className="text-capitalize fs-6">{author.name}</p>
          </div>

          {isMyBlog && (
            <div className="d-grid mt-3">
              <Button
                variant="outline-danger"
                className=""
                size="sm"
                onClick={handleDelete}
              >
                Delete
              </Button>
            </div>
          )}
        </Card.Body>
      </Card>
    </Link>
  );
};

export default BlogItem;
