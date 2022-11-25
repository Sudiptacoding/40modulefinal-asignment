import React from 'react';
import { Link } from 'react-router-dom';
import './SearchCard.css';

const SearchCard = (props) => {
    const { id, title, body } = props.suggestion;
    const Slice = (str, num) => {
        if (str.length > num) {
            return str.slice(0, num) + "....."
        } else {
            return str;
        }
    };
    return (
        <div>
            <div className='search___item'>
                <div>
                    <img src={`https://randomuser.me/api/portraits/men/${id}.jpg`} alt="" />
                </div>
                <div className='text_search'>
                    <h4>Title:{Slice(title, 46)}</h4>
                    <p>Body:{Slice(body, 97)}</p>
                    <h6><Link to='/more' state={{id, title, body }}>Read More</Link></h6>
                </div>
            </div>
        </div>
    );
};

export default SearchCard;