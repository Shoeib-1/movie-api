import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import { Container } from "react-bootstrap";
import CardMovies from "./components/CardMovies";
import axios from "axios";
import MovieList from "./components/MovieList";
import Text from "./components/text";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
function App() {
  const [movies, setMovies] = useState([]);
  const [pageCount, setpageCount] = useState(0);

  //get all movies axios
  const getAllMovies = async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/trending/movie/day?api_key=98203601b54b80cfc8d22a0b91d25140"
    );
    setMovies(res.data.results);
    setpageCount(res.data.results.total_pages)
  };

  // تنفيذ الداله عند فتح الموقع
  useEffect(() => {
    getAllMovies();
  }, []);

  // search in API
  const searchMovies = async (word) => {
    if ((word === "")) {
      getAllMovies();
    } else {
      const res = await axios.get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=98203601b54b80cfc8d22a0b91d25140&query=${word}`
      );
      setMovies(res.data.results);
      setpageCount(res.data.results.total_pages)

    }
  };

  // Get Current Page
  const getPage = async (page) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=98203601b54b80cfc8d22a0b91d25140&page=${page}`
    );
    setMovies(res.data.results);
    setpageCount(res.data.results.total_pages)

  };

  return (
    <div className="">
      <NavBar searchMovies={searchMovies} />
      <Container>
        <BrowserRouter>
            <Routes>
              <Route  path="/" element={<MovieList movies={movies} getPage={getPage} pageCount={pageCount}/>} />
               <Route path="/movie/:id"  element={ <MovieDetails/>}/>
            </Routes>
        </BrowserRouter>
       
      </Container>
    </div>
  );
}

export default App;
