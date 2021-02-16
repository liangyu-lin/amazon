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
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className='header'>
      <Link to='/'>
        <img
          className='header__logo'
          src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
          alt=''
        />
      </Link>
      <Room className='header__pinIcon' />
      <div className='header__option header__address'>
        <span className='header__optionLineOne'>Hello</span>
        <span className='header__optionLineTwo'>Select your address</span>
      </div>
      <div className='header__search'>
        <input className='header__searchInput' type='text' />

        <Search className='header__searchIcon' />

        <IconFlagCA className='header__flag' />
        <ArrowDropDown className='header__expand' />
      </div>

      <div className='header__nav'>
        <Link to={!user && "/login"}>
          <div onClick={handleAuthenticaton} className='header__option'>
            <span className='header__optionLineOne'>
              Hello{!user ? "," : ", " + user.email}
            </span>
            <span className='header__optionLineTwo'>
              {user ? "  Sign Out" : "  Sign In"}
            </span>
          </div>
        </Link>

        <div className='header__option'>
          <span className='header__optionLineOne'>Returns</span>
          <span className='header__optionLineTwo'>& Orders</span>
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
