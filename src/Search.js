import React from 'react'
import './Search.css'
import SearchResult from './SearchResult'
import results from './SearchResults'

const Search = () => {
    return (
        <div className="search">
            <div className="search_top">
                <p>300+ stays &#x2022; Weekend in Jul, Aug &#x2022; 2 guests</p>
                <h2>Places to stay near you</h2>
            </div>
            <div className="search_tags">
                <div className="flex_item">
                    Cancellation flexibility
                </div>
                <div className="flex_item">
                    Type of place
                </div>
                <div className="flex_item">
                    Price
                </div>
                <div className="flex_item">
                    Rooms and beds
                </div>
            </div>
            {
                results.map((obj, index) => {
                    return (
                        <SearchResult key={index} {...obj}/>
                    )
                })
            }
        </div>
    )
}

export default Search
