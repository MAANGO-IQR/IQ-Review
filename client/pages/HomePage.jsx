//make homePage.jsx
import React from "react";
import MangoSelect from "../components/login/maangoSelect";
import DifficultySelect from "../components/login/difficultySelect";
import CategorySelect from "../components/login/categorySelect";
import Feed from "../components/feed/Feed";

function HomePage() {
  return (
    <>
      <div className="homeContainer">
        <MangoSelect></MangoSelect>
        <DifficultySelect></DifficultySelect>
        <CategorySelect></CategorySelect>
        <Feed></Feed>
      </div>
    </>
  );
}
export default HomePage;
