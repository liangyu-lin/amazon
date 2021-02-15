import React from "react";
import "./Header.css";
import {
  ArrowDropDown,
  Room,
  Search,
  ShoppingBasket,
} from "@material-ui/icons";

import { IconFlagUS, IconFlagCA } from "material-ui-flags";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className='header'>
      <Link to='/'>
        <img
          className='header__logo'
          src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
          alt=''
        />
      </Link>
      <div className='header__search'>
        <Room className='header__pinIcon' />
        <div className='header__option'>
          <span className='header__optionLineOne'>Hello</span>
          <span className='header__optionLineTwo'>Select your address</span>
        </div>
        <input className='header__searchInput' type='text' />

        <Search className='header__searchIcon' />

        <IconFlagCA className='header__flag' />
        <ArrowDropDown className='header__expand' />
      </div>

      <div className='header__nav'>
        <div className='header__option'>
          <span className='header__optionLineOne'>Hello, Sign In </span>
          <span className='header__optionLineTwo'>Accounts & Lists</span>
        </div>

        <div className='header__option'>
          <span className='header__optionLineOne'>Returns</span>
          <span className='header__optionLineTwo'>& Orders</span>
        </div>

        <div className='header__option'>
          <span className='header__optionLineOne'>Your</span>
          <span className='header__optionLineTwo'>Prime</span>
        </div>

        <Link to='/checkout'>
          <div className='header__optionBasket'>
            <ShoppingBasket />
            <span className='header__optionLineTwo header__basketCount'>
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
