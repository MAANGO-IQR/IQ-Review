import React from "react";

function FeedItem(props) {
    console.log(props)
    return (
        <div className='mt-sm' onClick={() => props.deleteQuestion(props.id)}>
            <div>Question: {props.content}</div>
            <div>{props.category}</div>
            <div>{props.difficulty}</div>
            <div>{props.companyname}</div>
        </div>
    );
}
export default FeedItem;