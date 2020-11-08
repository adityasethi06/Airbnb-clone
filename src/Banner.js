import React, {useState} from 'react';
import './Banner.css';
import { Button } from '@material-ui/core'
import DatePicker from './DatePicker';

const Banner = () => {
    const [showSearch, setShowSearch] = useState(false);
    
    return (
        <div className="banner">
            <div className="banner_search">
                <Button 
                    onClick={() => setShowSearch(!showSearch)}
                    variant="outlined">{showSearch ? "Hide dates" : "Search dates"}</Button>
                {showSearch && <DatePicker />}
            </div>
            <div className="banner_info">
                <h1>Go Near</h1>
                <h5>Settle in somewhere new. Discover stays to live, work, or just relax.</h5>
                <Button variant="outlined">Explore nearby</Button>
            </div>
        </div>
    )
}

export default Banner
