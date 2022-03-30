import styled from "styled-components";
import UserContext from "../contexts/usercontext";
import React from "react";
import { useContext } from "react";

export default function Header () {
    const { image } = useContext(UserContext);
    return (
    <HeaderInfo>
      <h1>Track It</h1>
      <img src={image}/>
    </HeaderInfo>
    )    
}

const HeaderInfo = styled.header`
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    width: 100%;
    height: 70px;
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

h1 {
    font-family: 'Playball';
    font-weight: 400;
    font-size: 38.982px;
    line-height: 49px;
    color: #FFFFFF;
    margin-left: 18px;
}

img {
    width: 51px;
    height: 51px;
    border-radius: 98.5px;
    margin-right: 18px;
}
`;