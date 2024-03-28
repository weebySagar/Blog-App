import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import formatDate from "../../../utils/formattedDate";
import useFetch from "@hooks/useFetch";
import { deleteBlog } from "../../../services/blogService";
import toast from "react-hot-toast";
import ParseContent from "@components/parsecontent/ParseContent";

const BlogItem = ({
  _id,
  title,
  subtitle,
  content,
  author,
  createdAt,
  isMyBlog = false,
  refetch,
}) => {
  const handleDelete = id => {
    // const { data, isLoading } = useFetch(deleteBlog, id);
    toast.promise(deleteBlog(id), {
      loading: "Deleting...",
      success: () => {
        refetch();
        return "Deleted Successfully";
      },
      error: err => err.message,
    });
  };
  return (
    <>
      <Link to={`/blogs/${_id}`}>
        <Card className="h-100">
          <Card.Img variant="top" src="" />
          <Card.Body className="d-flex flex-column">
            <Card.Title as={"h4"} className="mb-4">
              {title}
            </Card.Title>
            <Card.Text className="fs-6 mb-3">{subtitle}</Card.Text>
            <div className="d-flex justify-content-between align-items-center mt-auto">
              <p className="fs-6">{formatDate(createdAt)}</p>
              <p className="text-capitalize fs-6">{author.name}</p>
            </div>
          </Card.Body>
        </Card>
      </Link>
      {isMyBlog && (
        <div className="d-grid mt-2">
          <Button
            variant="outline-danger"
            className=""
            size="sm"
            onClick={() => handleDelete(_id)}
          >
            Delete
          </Button>
        </div>
      )}
    </>
  );
};

export default BlogItem;
