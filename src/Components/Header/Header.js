import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Home from '../Home/Home';
import { useStateValue } from '../../StateProvider';

const Header = () => {
    const [{ basket }, dispatch] = useStateValue();
    console.log(basket);
    return (
        <div>
            <nav className='header'>
                {/* Logo on the left -img*/}
                <Link to='/login'>
                    <img className='header_logo'
                        src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='' />
                </Link>
                {/* Search box */}
                <div className='header_search'>
                    <input type='text' className='header_searchInput' />
                    <SearchIcon className='header_searchIcon' />
                </div>

                {/* 3Links */}
                <div className='header_nav'>
                    {/* 1st link */}
                    <Link to='/' className='header_link'>
                        <div className='header_option'>
                            <span className='header_optionLineOne'>Hello Quezi</span>
                            <span className='header_optionLineTwo'>Sign In</span>
                        </div>
                    </Link>
                    {/* 2nd link */}
                    <Link to='/' className='header_link'>
                        <div className='header_option'>
                            <span className='header_optionLineOne'>Returns</span>
                            <span className='header_optionLineTwo'>& Orders</span>
                        </div>
                    </Link>
                    {/* 3rd link */}
                    <Link to='/' className='header_link'>
                        <div className='header_option'>
                            <span className='header_optionLineOne'>Your</span>
                            <span className='header_optionLineTwo'>Prime</span>
                        </div>
                    </Link>
                    {/* 4th link */}
                    {/* Basket Icon with numbers */}
                    <Link to='/checkout' className='header_link'>
                        <div className='header_optionBasket'>
                            {/* shopping Basket Icon */}
                            <ShoppingBasketIcon />
                            {/* Number of tems in The Basket */}
                            <span className='header_optionLineTwo header_basketCount'>
                                {basket?.length}
                            </span>

                        </div>
                    </Link>
                </div>
            </nav>
            <Home />
        </div>
    )
}

export default Header
