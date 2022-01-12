import React from 'react';

const  difficulties = ['Easy','Medium','Hard']
let difficulty=  difficulties.map((currDiff) => {
    return  <option value = {currDiff}>{currDiff} </option>
})

function DifficultySelect(){
    return(
   
        
        <div className='diffSelect'>
           <h1 >Select Difficulty: </h1> 
            <select> 
                {difficulty}
            </select>
        </div>
    
    )
}

export default DifficultySelect;