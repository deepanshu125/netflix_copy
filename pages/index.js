import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import ReactDOM from 'react-dom';
import axios from 'axios';
import movieData from './db.json';


export default function Home() {
  const [MovieName , GetMovieName] = useState(null);
  const [MovieInfo , GetMovieInfo] = useState(null);
  const [search , setSearch] = useState("");
  const [m_movie , setM_Movie] = useState(movieData.movies);
  
  // const fetchMovieInfo = () => {

	// 	 axios.get('http://www.omdbapi.com/?apikey=52e8a82c'+ '&t='+ MovieName).then((response) => {
  //      console.log(response); 
  //      const {data} = response;
			
	// 		GetMovieInfo(data);
  //     })
	// };
  



  let data = JSON.parse(JSON.stringify(movieData));
  let movieArr = data.movies;
  // movieArr.map((movie)=>{
  //   //console.log(movie.title);
  //   return movie.title;

  // })


  const fetchMovieInfo =() => {
    console.log("first time", MovieName);
    setM_Movie( m_movie.filter((movie) =>  movie.title === MovieName  ));
    //  console.log(m_movie);
   };
  const setText = (e) => {
    setSearch(e);
    GetMovieName(e)
  }
  return (
    <>
    <div >
      
      <h2 className='HeadingTop'> SEARCH A MOVIE </h2>
      <input type={'text'} value={search} className='Search_Bar' placeholder='Search a Movie ' 
      onChange={(e)=> setText(e.target.value)}

      />
      <button className='Buttonsearch'  onClick={fetchMovieInfo}>SEARCH</button> 


    </div>
    {/* {tasks.map(task => { */}
    {
      m_movie.length > 0 ? 
      <div className="container">
      <div className="row">
      {m_movie.map(movie => {
        return(<div className="col-3" key={movie.id}>
          {/* if(MovieName === movie.title)
          {
            <p>movieeee foundddd</p>

          } */}
            <h2 >{movie.title}</h2>
            <p> {movie.year}</p>
            <p> {movie.director}</p>
            
            <img src={movie.posterUrl} />
            
            
            </div>
        )
      })}
        </div>  
      </div>
      : "No movie found"
    }
    
      {/* </div> */}


    </>
  )
    }
