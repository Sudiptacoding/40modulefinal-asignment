import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import ShowPaginateCard from '../ShowPaginateCard/ShowPaginateCard';
import './SearchPagenation.css';

const SearchPagenation = () => {
    const [item, setItem] = useState([]);
    const [pageCount, setPageCount] = useState(0);

    const limit = 10;

    useEffect(() => {
        const getComments = async () => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=1&_limit=${limit}`);
            const data = await res.json();
            const total = res.headers.get('x-total-count');
            setPageCount(Math.ceil(total / limit));
            setItem(data);
        }
        getComments();
    }, []);

    const featchComments = async (currentPage) => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=${limit}`
        );
        const data = await res.json();
        return data;
    };

    const handlePageClick = async (data) => {
        console.log(data.selected);
        let currentPage = data.selected + 1

        const commentFromServer = await featchComments(currentPage);
        setItem(commentFromServer)
    };
    return (
        <div>
            <ReactPaginate
                previousLabel={"previous"}
                nextLabel={"next"}
                breakLabel={"..."}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName={"pagination justify-content-center"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                activeClassName={"active"}
            />

            <div className='show__card'>
                {
                    item.map(item => <ShowPaginateCard item={item} key={item.id}></ShowPaginateCard>)
                }

            </div>
        </div>
    );
};

export default SearchPagenation;