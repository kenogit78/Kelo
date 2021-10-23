import React from 'react'
import { FcSearch } from 'react-icons/fc'
import {
    NavbarContainer,
    NavLogo,
    NavSearch,
    NavMenu,
    NavItem,
    NavLinks
} from './NavbarStyles';

const Navbar = () => {
    return (
        <>
           <NavbarContainer>
               <NavLogo to='/'>
                    Kelo
               </NavLogo>
                   
               <NavSearch>
                 <FcSearch />
                 <input type="text" 
                 placeholder='Search for an hotel'
                    
                 />
               </NavSearch>

               <NavMenu>
                   <NavItem>
                       <NavLinks>
                            Sign In
                       </NavLinks>
                   </NavItem>
                   <NavItem>
                       <NavLinks>
                            Register
                       </NavLinks>
                   </NavItem>
               </NavMenu> 
               
            </NavbarContainer> 
        </>
    )
}

export default Navbar
