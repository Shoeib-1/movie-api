import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { Link  , useParams} from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
const MovieDetails = () => {
  const params = useParams();
  const[movie , setMovie]=useState([])
  //get all movies details
  const getMovieDettails = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=98203601b54b80cfc8d22a0b91d25140`
    );
    setMovie(res.data);
  };
  useEffect(() => {
    getMovieDettails();
  }, []);
  return (
    <div>
        <Row className="justify-content-center">
                <Col md="12" xs="12" sm="12" className="mt-4 ">
                    <div className="card-detalis  d-flex align-items-center ">
                        <img
                            className="img-movie w-30"
                            src={`https://image.tmdb.org/t/p/original/`+movie.backdrop_path}
                            alt="ascad"
                        />
                        <div className="justify-content-center text-center  mx-auto">
                            <p className="card-text-details border-bottom">
                                اسم الفيلم: {movie.title}
                            </p>
                            <p className="card-text-details border-bottom">
                                تاريخ الفيلم :{movie.release_date}
                            </p>
                            <p className="card-text-details border-bottom">
                                عدد المقيمين : {movie.vote_count}
                            </p>
                            <p className="card-text-details border-bottom">
                                التقييم :{movie.vote_average}
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row className="justify-content-center">
                <Col md="12" xs="12" sm="12" className="mt-1 ">
                    <div className="card-story  d-flex flex-column align-items-start">
                        <div className="text-end p-4 ">
                            <p className="card-text-title border-bottom">القصة:</p>
                        </div>
                        <div className="text-end px-2">
                            <p className="card-text-story">{movie.overview}</p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col
                    md="10"
                    xs="12"
                    sm="12"
                    className="mt-2 d-flex justify-content-center ">
                       <Link to="/">
                        <button
                            style={{ backgroundColor: "#0d3c47", border: "none" }}
                            className="btn btn-primary mx-2 buttonShow">
                            عوده للرئيسيه
                        </button>
                        </Link>
                    <a href={movie.homepage}>
                        <button
                            style={{ backgroundColor: "#0d3c47", border: "none"  }}
                            className="btn btn-primary buttonShow">
                            مشاهده الفيلم
                        </button>
                        </a>
                </Col>
            </Row>
    </div>
  )
}

export default MovieDetails;