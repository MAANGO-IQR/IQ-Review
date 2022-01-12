//make homePage.jsx
 import React from 'react';
 import MangoSelect from '../components/login/maangoSelect';
 import DifficultySelect from '../components/login/difficultySelect';
import CategorySelect from '../components/login/categorySelect';


       

        function HomePage(){
            return(
            <>
           
            <div className='homeContainer'>
               <MangoSelect></MangoSelect>
               <DifficultySelect></DifficultySelect>
               <CategorySelect></CategorySelect>
            </div>
            </>
            )
        }
        export default HomePage;