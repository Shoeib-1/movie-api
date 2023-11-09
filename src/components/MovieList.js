import React from "react";
import { Row } from "react-bootstrap";
import CardMovies from "./CardMovies";
import PaginationComponent from "./Pagination";
const MovieList = ({ movies, getPage, pageCount }) => {
  return (
    <Row>
      {movies.length >= 1 ? (
        movies.map((mov) => {
          return <CardMovies key={mov.id} mov={mov} />;
        })
      ) : (
        <h2>No Movies</h2>
      )}
      {movies.length >= 1 ? (
        <PaginationComponent getPage={getPage} pageCount={pageCount} />
      ) : null}
    </Row>
  );
};

export default MovieList;
