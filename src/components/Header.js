import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Clear';
import { selectCars } from '../features/car/carSlice'
import { useSelector } from 'react-redux'

function Header() {

    const [ burgerStatus , setBurgerStatus ] = useState(false)
    const cars = useSelector(selectCars)

    return (
        <Container>
            <a>
                <img src="/images/logo.svg" />
            </a>

            <Menu>
                {
                    cars && cars.map((car , index) => (
                        <a href="#" key={index}>{car}</a>
                    ))
                }
            </Menu>

            <RightMenu>
                <a>Shop</a>
                <a>Tesla account</a>
                <CustomMenu onClick = {() => setBurgerStatus(true)} />
            </RightMenu>

            <BurgerNav show = {burgerStatus} >
                <CloseWrapper>
                    <CustomClose onClick={() => setBurgerStatus(false)} />
                </CloseWrapper>
                {
                    cars && cars.map((car , index) => (
                        <li key={index}><a href="#">{car}</a></li>
                    ))
                }
                <li><a>Existing Inventory</a></li>
                <li><a>Used Inventory</a></li>
                <li><a>Trade-in</a></li>
                <li><a>Cybertruck</a></li>
                <li><a>Roadaster</a></li>
            </BurgerNav>
        </Container>
    )
}

export default Header

const CloseWrapper = styled.div`
    display : flex ;
    justify-content : flex-end ;
`

const CustomClose = styled(ClearIcon)`
    cursor : pointer ;
`

const BurgerNav = styled.div`
    position : fixed ;
    top : 0 ;
    bottom : 0 ;
    right : 0 ;
    background-color : white ;
    width : 300px ;
    list-style : none ;
    padding : 20px ;
    display : flex ;
    flex-direction : column ;
    text-align : start ;
    transform : ${props => props.show ? 'translateX(0)' : 'translateX(100%)'} ;
    transition : transform 0.2s ease-in ;

    li {
        padding : 15px 0 ;
        border-bottom : 1px solid rgba(0 , 0 , 0 , 0.2) ;

        a {
            font-weight : 600;
        }
    }
`

const CustomMenu = styled(MenuIcon)`
    cursor : pointer ;
`

const RightMenu = styled.div`
    display : flex ;
    align-items : center ;

    a {
        font-weight : 600 ;
        text-transform : uppercase ;
        margin-right : 10px ;
    }
`

const Menu = styled.div`
    display : flex ;
    align-items : center ;
    flex : 1 ;
    justify-content : center ;

    a {
        font-weight : 600 ;
        text-transform : uppercase ;
        padding : 0 10px ;
        
    }

    @media(max-width : 768px) {
        display : none ;
    }
`

const Container = styled.div`
    min-height : 60px ;
    position : fixed ;
    display : flex ;
    align-items : center ;
    justify-content : space-between ;
    padding : 0 20px ;
    top : 0 ;
    left : 0 ;
    right : 0 ;
    z-index : 1 ;
`
