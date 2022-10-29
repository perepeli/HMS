import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { UserContext } from "../../contexts/user.context";
import { CartContext, CartProvider } from "../../contexts/cart.context";

//import { ReactComponent as HmsLogo } from "../../assets/hms-logo.svg";
import { ReactComponent as HmsLogo } from "../../assets/hms-logo-4.svg";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import "./navigation.styles.scss";
import Footer from "../../components/home/footer/footer.component";
import AvatarComponent from "../../components/home/avatar/avatar.component";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <div>
      <Fragment>
        <div className="navigation">
          <Link className="logo-container" to="/">
            <HmsLogo className="logo" />
          </Link>
          <div className="nav-links-container">
            <Link className="nav-link" to="/shop">
              MENUS
            </Link>

            <Link className="nav-link" to="/nutritionists">
              NUTRITIONISTS
            </Link>

            <Link className="nav-link" to="/settings">
              SETTINGS
            </Link>

            {currentUser ? (
              <span className="nav-link" onClick={signOutUser}>
                SIGN OUT
              </span>
              
            ) : (
              <Link className="nav-link" to="/auth">
                SIGN IN
              </Link>
            )}
            <AvatarComponent />
            <CartIcon />
          </div>
          {isCartOpen && <CartDropdown />}
        </div>

        <div
          className="navigation"
          style={{
            backgroundColor: "#F8F8FF",
          }}
        >
          <div className="nav-links-container-left">
            <Link className="nav-link" to="/how-it-works">
              HOW IT WORKS
            </Link>

            <Link className="nav-link" to="/rewards-program">
              REWARDS PROGRAM
            </Link>

            <Link className="nav-link" to="/faq">
              FAQ
            </Link>

            <Link className="nav-link" to="/contact-us">
              CONTACT US
            </Link>

          </div>
        </div>

        <Outlet />
        <br />
        <br />
        <div
          style={{
            
          }}
        >
          <Footer />
        </div>
      </Fragment>
    </div>
  );
};

export default Navigation;
