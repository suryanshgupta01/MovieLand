import React, { useState, useEffect } from "react";
import Alert from 'react-bootstrap/Alert';
import Hello from './sayHello';
import Tweet from './tweet';
import './App.css'
import Moviecard from "./moviecard";
import { render } from "@testing-library/react";
import searchIcon from './icons8-search.svg'
//  b898e26f

const API_URL = 'http://www.omdbapi.com?apikey=b898e26f';

const movie1 =
{
  "Title": "Fighting, Flying and Driving: The Stunts of Spiderman 3",
  "Year": "2007",
  "imdbID": "tt1132238",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BNTI3NDE1ZmEtMTRiMS00YTY4LTk0OGItNjY4YmI0MDM4OGM4XkEyXkFqcGdeQXVyODE2NDgwMzM@._V1_SX300.jpg"
}

function BasicExample() {

  const [Movies, setMovies] = useState([]);
  const [searchterm,setsearchterm] =useState('');

  //this is for API work nothing we can alter/add
  const searchmovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();

    setMovies(data.Search);
  }
  useEffect(() => {
    searchmovies('Spiderman');
  }, []);


  const Person = () => {
    return (
      <>
        <h1>name :jonh</h1>
        <h1>last name :matin</h1>
        <h1>age:21</h1>

      </>
    )
  }


  const [isred, setred] = useState(false);
  const [count, setcount] = useState(1);
  // let count1 = 0;
  const increment = () => {
    setcount(count + 1);
    // setred(!isred); //swappes between true and false
  }
  const decrement = () => {
    setcount(count - 1);
    // setred(!isred); //swappes between true and false
  }
  const reset = () => {
    setcount(0);
  }
  const [users, setusers] = useState([
    { name: "name1", message: "tweet1" },
    { name: "name2", message: "tweet2" },
    { name: "name3", message: "tweet3" }

  ]);

  
  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder="search for movies"
          value={searchterm}
          onChange={(e) => setsearchterm(e.target.value)}
        />
        <img src={searchIcon}
          alt="search_icon"
          onClick={() => searchmovies(searchterm)}
        />
      </div>

      {
        Movies?.length > 0 ?
          (
            <div className="container">
              {/* for single display of movie */}
              {/* <Moviecard movie1={movie1} /> */}

              {/* for multiple display of movie */}
              {Movies.map((movie)=>(
                  <Moviecard movie1={movie}/>
                ))}
            </div>
          ) :
          (
            <div className="empty">
              <h2>no moivees fouind</h2>
            </div>
          )
      }

      <div className="container">
        {/* <Moviecard movie1={movie1} /> */}
      </div>



      {/* just like for loop used to display each tweet */}
      {/* {users.map(user => (
        <Tweet name={user.name} message={user.message} />
      ))} */}

      {/* <Person /> */}

      {/* <h1 className={isred ? "red" : ""}>here is the text</h1> */}
      {/* <Hello /> */}
      {/* <Tweet name="person1" message="tweet text 1" likes="100" />
      <Tweet name="person2" message="tweet text 2" likes="200" />
      <Tweet name="person3" message="tweet text 3" likes="300" />
      <Tweet name="person4" message="tweet text 4" likes="400" /> */}

      {/* <button onClick={increment}>incerment</button>
      <button onClick={decrement}>decerment</button>
      <button onClick={reset}>reset</button>

      <h1>{count}</h1> */}
    </div>

  );
}

export default BasicExample;