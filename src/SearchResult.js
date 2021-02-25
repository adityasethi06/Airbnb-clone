import React from 'react'
import './SearchResult.css'
import GradeIcon from '@material-ui/icons/Grade';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const SearchResult = ({
    image,
    location,
    title,
    description,
    star,
    price,
    total
}) => {
    console.log(image)
    return (
        <div className="searchResult">
            <div className="image_container">
                <img src={image} alt="" className="searchResult_img"/>
            </div>
            <div className="searchResult_info">
                <div className="searchResult_info_top">
                    <div>
                        <p style={{color: "gray", marginBottom: "4px"}}>{location}</p>
                        <p>{title}</p>
                    </div>
                    <div>
                        <FavoriteBorderIcon/>
                    </div>
                </div>
                <div className="searchResult_info_middle">
                    <p>{description}</p>
                </div>
                <div className="searchResult_info_btm">
                    <div className="searchResult_rating">
                        <GradeIcon style={{color: "red"}}/> {star}
                    </div>
                    <div className="searchResult_price">
                        <p>{price}</p>
                        <p>{total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResult
