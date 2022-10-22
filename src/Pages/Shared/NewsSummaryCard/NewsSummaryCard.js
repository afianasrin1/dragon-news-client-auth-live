import React from "react";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";

const NewsSummaryCard = ({ news }) => {
  const { _id, title, author, details, image_url, rating, total_view } = news;
  //   console.log(news);
  return (
    <div>
      {/* <li>{news.title}</li> */}
      <Card className="mb-5">
        <Card.Header
          as="h5"
          className="d-flex justify-content-between align-items-center"
        >
          <div className="d-flex">
            <Image
              className=" me-3"
              roundedCircle
              src={author.img}
              style={{ height: "60px" }}
            ></Image>
            <div>
              <h4 className="mb-0">{author.name}</h4>
              <p>{author.published_date}</p>
            </div>
          </div>
          <div>
            <FaRegBookmark className="me-3" />
            <FaShareAlt />
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Img variant="top" src={image_url} />
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {details.length > 250 ? (
              <>
                {details.slice(0, 250) + "..."}
                <Link to={`/news/${_id}`}>Read More</Link>
              </>
            ) : (
              <>{details}</>
            )}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between align-items-center">
          <div>
            <FaStar className="text-warning me-2"></FaStar>
            <span>{rating?.number}</span>
          </div>
          <div>
            <FaEye className="me-2"></FaEye>
            <span>{total_view}</span>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsSummaryCard;