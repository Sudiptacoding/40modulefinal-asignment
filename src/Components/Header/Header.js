import React from 'react';
import './Header.css';

import axios from 'axios';
import { useEffect, useState } from 'react';
import SearchCard from '../SearchCard/SearchCard';

const Header = () => {
    const [users, setUsers] = useState([]);
    const [text, setText] = useState('');
    const [suggestion, setSuggesTion] = useState([]);

    useEffect(() => {
        const loadUsers = async () => {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
            setUsers(response.data)
        }
        loadUsers();
    }, []);

    const onChangeHandelar = (text) => {
        let matches = []
        if (text.length > 0) {
            matches = users.filter(user => {
                const regex = new RegExp(`${text}`, "gi");
                return user.title.match(regex)
            })
        }
        setSuggesTion(matches);
        setText(text);
    }
    return (
        <div>
            <input className="form-control" type="search" onChange={(e) => onChangeHandelar(e.target.value)} value={text} placeholder='Search any title' />
            <div>
                {
                    suggestion && suggestion.map((suggestion, i) =>
                        <div key={i}>
                            <div className='search__card'>
                                {
                                    <SearchCard suggestion={suggestion}></SearchCard>
                                }
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Header;