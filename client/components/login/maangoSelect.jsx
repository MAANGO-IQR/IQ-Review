import React from 'react';

const companies = ['Meta','Apple','Amazon','Netflix','Google','Other']

let companyList =  companies.map((company) => {
    return  <option value = {company}>{company} </option>
})

function MangoSelect(){
    return(
        <>
        <div className='maangoSelect'>
        <h1 >Select Company: </h1> 
            <select> 
                {companyList}
            </select>
        </div>
      </>
    
    )
}

export default MangoSelect;