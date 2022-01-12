import React from 'react';

const  difficulties = ['Easy','Medium','Hard']
let difficulty=  difficulties.map((currDiff) => {
    return  <option value = {currDiff}>{currDiff} </option>
})

function DifficultySelect(){
    return(
   
        
        <div className='diffSelect'>
           <h2 >Select Difficulty: </h2> 
            <select> 
                {difficulty}
            </select>
        </div>
    
    )
}

export default DifficultySelect;