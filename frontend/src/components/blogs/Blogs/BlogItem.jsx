import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const BlogItem = ({ _id, title, content, author, createdAt }) => {
  const date = new Date(createdAt);
  const formattedDate = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()} `;

  return (
    <Link to={_id}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title as={"h4"}>{title}</Card.Title>
          <Card.Text className="fs-6 mt-3">
            {content.substring(0, 50)}...
          </Card.Text>
          <div className="d-flex justify-content-between align-items-center mt-3">
            <p className="fs-6">{formattedDate}</p>
            <p className="text-capitalize fs-6">{author.name}</p>
          </div>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default BlogItem;
