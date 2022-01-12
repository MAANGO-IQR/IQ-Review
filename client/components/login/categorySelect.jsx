import React from 'react';

const  categories = ['Cat1','Cat2','Cat3','Other']
let category=  categories.map((currCat) => {
    return  <option value = {currCat}>{currCat} </option>
})

function CategorySelect(){
    return(
        <div className='CatSelect'>
        <h2 >Select Category: </h2> 
            <select> 
                {category}
            </select>
        </div>
    
    )
}

export default CategorySelect;