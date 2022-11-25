import React from 'react';
import Header from '../Header/Header';
import SearchPagenation from '../SearchPagenation/SearchPagenation';

import './Home.css';

const Home = () => {
    return (
        <div>
            <div>
                <div className='header__F'>
                    <div><h1>If you want to easily search any post title.Please type any title under the search bar</h1></div>
                    <div>
                        <Header></Header>
                    </div>
                </div>
            </div>

            <SearchPagenation></SearchPagenation>
        </div>
    );
};

export default Home;