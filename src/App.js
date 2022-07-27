// import styled from "styled-components";
import Header from './Components/Header';
import Footer from './Components/Footer';
import PublicContainer from './Components/PublicContainer';
import MovieContainer from './Components/Moviecontainer';
import { useState } from "react";
import axios from "axios";



const apikey = `ac83e34`;
function App() {
  const [searchQuery, updateSeachQuery] = useState('');
  const [timeoutId, updateTimeoutId] = useState();
  const [movieList, updateMovieList] = useState([]);
  
  const fetchData = async (searchString) => {
    const searchurl = `https://www.omdbapi.com/?apikey=${apikey}&s=${searchString}`;
    // console.log(searchurl);
    const response = await axios.get(searchurl);
    updateMovieList(response.data.Search);
    // console.log(response.data.Search);
  }

  const SeachBarTextChange = (text) => {
    clearTimeout(timeoutId);
    updateSeachQuery(text);
    const timeout = setTimeout(() => fetchData(text), 500);
    updateTimeoutId(timeout);
  }

 

  return (
    <>
      <Header searchQuery={searchQuery} SeachBarTextChange={SeachBarTextChange} />
      { searchQuery === '' && <PublicContainer />}
      <MovieContainer movieList = {movieList} searchQuery = {searchQuery}/>
      <Footer/>
    </>
  );
}

export default App;
