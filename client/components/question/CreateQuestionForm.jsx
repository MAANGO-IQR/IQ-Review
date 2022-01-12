// Form to submit a new interview question 

// 4 fields for user to either input or select from dropdown
// 1. content: Interview question, free-form input
// 2. category: Dropdown with options: algorithm, systems design, other 
// 3. difficulty: Dropdown with options: easy, medium, hard 
// 4. company: Dropdown with options: Meta/Facebook, Amazon, Apple, Netflix, Google, Other

// NOTE: Occurrences will NOT be displayed on this form
    // Users will be able to click whether or not they've seen this question on the 
    // page for a POSTED question, such as at an endpoint like /question/:id 
import React from 'react';

function CreateQuestionForm() {
    return (
        <div>
            <form autoComplete="false">
                <textarea placeholder='Enter Question'></textarea>
            </form>
        </div>
    )
}

export default CreateQuestionForm;