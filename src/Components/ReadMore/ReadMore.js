import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Comments from '../Comments/Comments';
import './ReadMore.css';

const ReadMore = () => {
    const Moredata = useLocation();
    const { title, body, id } = Moredata.state;

    const [comments, setComments] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
            .then(res => res.json())
            .then(data => setComments(data));
    }, []);

    return (
        <div>
            <div className="detles__card">
                <div><img src={`https://randomuser.me/api/portraits/men/${id}.jpg`} alt="" /></div>
                <div>
                    <h3>Title: {title}</h3>
                    <h4>Body: {body}</h4>
                </div>
            </div>
            <div className='App'><h1>Comments This Post</h1></div>
            <div>
                {
                    comments.map(comment => <Comments comments={comment} key={comment.id}></Comments>)
                }
            </div>
        </div>
    );
};

export default ReadMore;