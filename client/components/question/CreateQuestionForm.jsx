// Form to submit a new interview question 

// 4 fields for user to either input or select from dropdown
// 1. content: Interview question, free-form input
// 2. category: Dropdown with options: algorithm, systems design, other 
// 3. difficulty: Dropdown with options: easy, medium, hard 
// 4. company: Dropdown with options: Meta/Facebook, Amazon, Apple, Netflix, Google, Other

// NOTE: Occurrences will NOT be displayed on this form
    // Users will be able to click whether or not they've seen this question on the dashboard

import React from 'react';

function CreateQuestionForm() {
    return (
        <div>
            <form autoComplete="false" id="createForm">
                <h2>Enter Question</h2>
                <textarea placeholder='Enter Question'></textarea>
                
                {/* Dropdown for category */}
                <label for="category">Category</label>
                <select name="category" id="category" form="createForm">
                    <option value="algorithm">Algorithm</option>
                    <option value="sd">Systems Design</option>
                    <option value="pd">Product Design</option>
                    <option value="other">Other</option>
                </select>

                {/* Dropdown for category */}
                <label for="difficulty">Difficulty</label>
                <select name="difficulty" id="difficulty" form="createForm">
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>

                {/* Dropdown for company */}
                <label for="company">Company</label>
                <select name="company" id="company" form="createForm">
                    <option value="meta">Meta/Facebook</option>
                    <option value="amazon">Amazon</option>
                    <option value="apple">Apple</option>
                    <option value="netflix">Netflix</option>
                    <option value="google">Google</option>
                    <option value="other">Other</option>
                </select>
            </form>

            <button>Submit</button>
        </div>
    )
}

export default CreateQuestionForm;