// Form to submit a new interview question 

// 4 fields for user to either input or select from dropdown
// 1. content: Interview question, free-form input
// 2. category: Dropdown with options: algorithm, systems design, other 
// 3. difficulty: Dropdown with options: easy, medium, hard 
// 4. company: Dropdown with options: Meta/Facebook, Amazon, Apple, Netflix, Google, Other

// NOTE: Occurrences will NOT be displayed on this form
    // Users will be able to click whether or not they've seen this question on the dashboard

import React from 'react';
import CategorySelect from '../login/categorySelect';
import DifficultySelect from '../login/difficultySelect';
import MangoSelect from '../login/maangoSelect';
// import CategorySelect from '../login/categorySelect';


function CreateQuestionForm() {
    // Submit a question to the database 
    function submitQuestion() {
        const contentEl = document.getElementById('content');
        const categoryEl = document.getElementById('category');
        const difficultyEl = document.getElementById('difficulty');
        const companyEl = document.getElementById('company');
        console.log('Question Submitted')
        // Options for POST request to /questions
        const optionsObject = {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify({
                content: contentEl.value, 
                category: categoryEl.value, 
                difficulty: difficultyEl.value, 
                companyname: companyEl.value,
                userid: 1
            })
        }

        // POST request to /questions 
        fetch ('/questions', optionsObject)
            .then(data => data.json())
            .then(response => {
                console.log('POST success from frontend')
            })
            .catch(err => {
                console.log('POST /question error - client: ' + err)
            })
    }

    return (
        <div>
            <form autoComplete="false" id="createForm">
                <h2>Enter Question</h2>
                <textarea placeholder='Enter Question' id='content' className='width-100'></textarea>
                
                {/* Dropdown for category */}
                <label htmlFor="category">Category</label>
                {/* <select name="category" id="category" form="createForm">
                    <option value="algorithm">Algorithm</option>
                    <option value="sd">Systems Design</option>
                    <option value="pd">Product Design</option>
                    <option value="other">Other</option>
                </select> */}
                <CategorySelect></CategorySelect>

                {/* Dropdown for category */}
                <label htmlFor="difficulty">Difficulty</label>
                {/* <select name="difficulty" id="difficulty" form="createForm">
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select> */}
                <DifficultySelect></DifficultySelect>

                {/* Dropdown for company */}
                <label htmlFor="company">Company</label>
                {/* <select name="company" id="company" form="createForm">
                    <option value="meta">Meta/Facebook</option>
                    <option value="amazon">Amazon</option>
                    <option value="apple">Apple</option>
                    <option value="netflix">Netflix</option>
                    <option value="google">Google</option>
                    <option value="other">Other</option>
                </select> */}
                <MangoSelect></MangoSelect>
            </form>

            <button className='mt-sm gray-button' onClick={() => submitQuestion()}>Submit</button>
        </div>
    )
}

export default CreateQuestionForm;