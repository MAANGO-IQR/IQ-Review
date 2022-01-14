import React from 'react';

const companies = ['Meta','Apple','Amazon','Netflix','Google','Other']

let companyList =  companies.map((company,i) => {
    return  <option id = {i} value = {company}>{company} </option>
})

function MangoSelect(){
    return(
      <>
        <div className='maangoSelect'>
        <h2 >Select Company: </h2> 
            <select id="company"> 
                {companyList}
            </select>
        </div>
      </>
    
    )
}

export default MangoSelect;