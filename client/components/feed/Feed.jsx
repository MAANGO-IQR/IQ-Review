import React from "react";
import FeedItem from "./FeedItem";
function Feed(props) {
    console.log(props.list)
    // props.list: Array of questions passed down from HomePage
    // Map through props.list and display a Feeditem for each
    const questionArray = props.list.map((question) => {
        return <FeedItem 
            content={question.content} 
            category={question.category}
            difficulty={question.difficulty}
            companyname={question.companyname}
        />
    })

    return (
        <div>
            <h>Feed</h1>
            {questionArray}
        </div>
    );
}
export default Feed;