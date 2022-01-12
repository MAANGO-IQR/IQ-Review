import React from "react";

function FeedItem(props) {
    console.log(props)
    return (
        <div className='mt-sm' onClick={() => props.deleteQuestion(props.id)}>
            <div>Question: {props.content}</div>
            <div>Category: {props.category}</div>
            <div>Difficulty: {props.difficulty}</div>
            <div>Company Name: {props.companyname}</div>
        </div>
    );
}
export default FeedItem;