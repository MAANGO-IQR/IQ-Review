import React from 'react';

const  categories = ["Algorithm", "Systems Design", "Product Design",'Other']
let category=  categories.map((currCat) => {
    return  <option value = {currCat}>{currCat} </option>
})

function CategorySelect(){
    return(
        <div className='CatSelect'>
        <h2 >Select Category: </h2> 
            <select id="category" > 
                {category}
            </select>
        </div>
    
    )
}

export default CategorySelect;