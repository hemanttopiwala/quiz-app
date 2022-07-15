import React from 'react';

import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {mobile} from '../responsive';



const Container = styled.div`
  height: 60px;
  background-color:#c5aa6a;
  ${mobile({ height:"50px"})};
  
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items:center;
  

  ${mobile({ padding:"10px 0px"})};
`;

const Left = styled.div`
    flex:1;
    display:flex;
    align-items:center
`
const Language=styled.span`
    font-size:14px;
    cursor:pointer;
    color:white;
    ${mobile({ display:"none"})};
`

// const SearchContainer=styled.div`
//     border: 0.5px solid lightgray;
//     display:flex;
//     align-item:center;
//     margin-left:25px;
//     padding:5px;
// `

const Input=styled.input`
    border:none;

    ${mobile({ width:"50px"})};
`

const Center = styled.div`
    flex:1;
    text-align:center
`

const Logo=styled.h1`
    font-weight:bold;
    color:white;
    ${mobile({ fontSize:"24px"})};
`

const Right = styled.div`
    flex:1;
    display:flex;
    align-items:center;
    justify-content:flex-end;

    ${mobile({ flex:2, justifyContent:"center"})};
`
const MenuItem=styled.div`
    font-size:14px;
    cursor:pointer;
    margin-left:25px;
    color:white;
    
    ${mobile({ fontSize:"12px", marginLeft:"8px"})};
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        {/* <Left>
          <Language>EN</Language>
          <SearchContainer>
            
            <Input placeholder='Search' />
            <Search style={{color:'gray' ,fontSize:16}}/>
            
          </SearchContainer>
        </Left> */}

        <Left>
            <Logo>Quizard</Logo>
        </Left>


        <Right>

          <Link to="/register" style={{textDecoration:'none' }}><MenuItem>REGISTER</MenuItem></Link>
          <Link to="/login" style={{textDecoration:'none' }}><MenuItem>SIGN IN</MenuItem></Link>

            
            
            {/* <MenuItem>
                <Badge badgeContent={4} color='primary'>
                    <ShoppingCartOutlined />
                </Badge>
            </MenuItem> */}
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
