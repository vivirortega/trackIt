import styled from "styled-components";
import logo from "./../assets/logotrackit.png";
import { Link } from "react-router-dom";

export default function Login() {

    return (
        <Container>
        <img src={logo}/>
        <Input type="email" placeholder="email"></Input>
        <Input type="password" placeholder="senha"></Input>
        <Link to="/habitos">
        <Submit type="submit">Entrar</Submit>
        </Link>
        <Link to="/cadastro">
        <p>Não tem uma conta? Cadastre-se!</p>
        </Link>
        </Container>
    )
}


const Container = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   gap: 6px;
   height: 100vh;

 p {
   font-size: 13.976px;
   line-height: 17px;
   text-decoration-line: underline;
   color: #52B6FF;
   margin-top: 25px;
 }  
`;

const Input = styled.input`
   width: 303px;
   height: 45px;
   border: 1px solid #D5D5D5;
   box-sizing: border-box;
   border-radius: 5px;
   color: #DBDBDB;
   font-size: 19.976px;

`;

const Submit = styled.button`
    width: 303px;
    height: 45px;
    background: #52B6FF;
    border-radius: 4.63636px;
    border: none;
    color: white;
    font-size: 20.976px;
`;