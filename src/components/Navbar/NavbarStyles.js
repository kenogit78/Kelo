import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'


export const NavbarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    max-width: 1333px;
    width: 100%;
    padding: 1em;
    background: #fff;
    box-shadow: 1px 3px 4px 4px rgba(194,194,194,0.78);
`

export const NavLogo = styled(LinkR)`
    margin-left: 1em;
    display: flex;
    align-items: center;
    font-size: 2em;
    text-decoration: none;
    font-weight: 550;
    font-family: Lato;
    cursor: pointer;
    color: #4F98CA;
`

export const NavSearch = styled.div`
    border-radius: 10px;
    display: flex;    
    width: 50%;
    background: #F6F6F6;
    padding: 0.5em;
    align-items: center;


    input{
        flex: 1;
        background: transparent;
         border: none;
         outline: none;
         padding-left: 0.5em;

    }
`
export const NavMenu = styled.ul`
    display: flex;
    align-items; center;


`

export const NavItem = styled.li`
    list-style: none;
    margin-right: 1.5em;
    
`

export const NavLinks = styled(LinkR)`
    text-decoration: none;
    font-family: Lato;
    cursor: pointer;
    color: #4F98CA;
    font-size: 1.1em;
    
`
