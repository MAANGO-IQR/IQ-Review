import React from "react";
import FeedItem from "./FeedItem";


function Feed(props) {
    // Func to delete a question, triggered in FeedItem
    function deleteQuestion(id) {
        fetch(`questions/${id}/1`, {
            method: 'DELETE'
        })
        .then(data => data.json())
        .then(data => console.log('Item Deleted' + id))
        .catch(err => console.log(err))
    }


    console.log(props.list)
    // props.list: Array of questions passed down from HomePage
    // Map through props.list and display a Feeditem for each
    const questionArray = props.list.map((question) => {
        console.log(question)
        return <FeedItem 
            deleteQuestion={deleteQuestion}
            id={question.questionid}
            content={question.content} 
            category={question.category}
            difficulty={question.difficulty}
            companyname={question.companyname}
        />
    })

    return (
        <div>
            <h1>Feed</h1>
            {questionArray}
        </div>
    );
}
export default Feed;