//make homePage.jsx
import React from "react";
import MangoSelect from "../components/login/maangoSelect";
import DifficultySelect from "../components/login/difficultySelect";
import CategorySelect from "../components/login/categorySelect";
import Feed from "../components/feed/Feed";
import { useState } from 'react';

function HomePage() {
  const [ list, setList ] = useState([]);

  // Get all questions and set in the list state 
  function fetchAll() {
    fetch('/questions') 
      .then(data => data.json())
      .then(data => {
        setList(data.questionsList);
      })
  }

  return (
    <>
      <div className="homeContainer border">
        <MangoSelect></MangoSelect>
        <DifficultySelect></DifficultySelect>
        <CategorySelect></CategorySelect>
        <button className='general-button' id='fetch-button' onClick={() => fetchAll()}>Load Questions</button>
      </div>
      
   
      {/* {list && list[0].content} */}
      <div className="feedContainer">
        <Feed list={list}></Feed>
      </div>
      
    </>
  );
}
export default HomePage;
