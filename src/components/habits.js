import Header from "./header";
import Footer from "./footer";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useContext } from "react";
import button from "./../assets/button.png";
import UserContext from "../contexts/usercontext";

export default function Habits() {
    const [habits, setHabits] = useState("");
    const [days, setDays] = useState("");

    function habitsPost() {
        
       const data = {
        name: habits,
        days,
      };
  
      const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", data);
  
      promise.then(response => {
        console.log(response);
      })
      promise.catch(error => { 
        console.log(error.response);
    
      });
    }

    return (
        <>
        <Header/>
        <Main>
        <div>
        <h1>Meus hábitos</h1>
        <img src={button}/>
        </div>
        <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
        </Main>
        <Footer/>
        </>
    )
}

const Main = styled.main`
    background-color: #F2F2F2;
    display: flex;
    flex-direction: column;
    height: 100vh;

div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: calc(28px + 70px);
}

h1 {
    font-size: 22.976px;
    line-height: 29px; 
    color: #126BA5;
    margin-left: 17px;
}

p {
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
    margin-left: 17px;
    margin-top: 28px;
}

img {
    width: 40px;
    height: 35px;
    margin-right: 18px;
}

`;

