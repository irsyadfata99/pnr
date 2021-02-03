import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, MobileIcon} from './NavbarElement'
import {animateScroll as scroll} from 'react-scroll'


const Navbar = ({toggle}) => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <Nav>
                <NavLink to = "/" onClick= {toggleHome}>logitech</NavLink>
                <MobileIcon onClick={toggle}>
                    <Bars />
                </MobileIcon>
                <NavMenu>
                    <NavLink to ='/Company' activeStyle>
                        Company
                    </NavLink>
                    <NavLink to ='/Product' activeStyle>
                        Product
                    </NavLink>
                    <NavLink to ='/Contact-us' activeStyle>
                        Contact Us
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    {/* <NavBtnLink to='/'></NavBtnLink> */}
                </NavBtn>
            </Nav>
        </>
    )
}

export default Navbar
