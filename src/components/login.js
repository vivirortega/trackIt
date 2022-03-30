import styled from "styled-components";
import logo from "./../assets/logotrackit.png";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Loading from "./loading";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    console.log(email, password);
    const navigate = useNavigate();
    
    
    function loginUser(event) {
      event.preventDefault();
      setIsLoading(true);
      
     const data = {
      email,
      password,
    };

    const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", data);

    promise.then(response => {
      console.log(response);
      navigate("/hoje");
    })
    promise.catch(error => { 
      console.log(error.response);
      setIsLoading(false);
      if(error.response.status === 401) {
        return alert("Usuário ou Senha inválidos")
      }
    });

  }

    return (
        <Container>
         <img src={logo}/>
        <Form onSubmit={loginUser}>
         <Input type="email" placeholder="email" value={email} required onChange={(e) => setEmail(e.target.value)} disabled={isLoading}>
         </Input>
         <Input type="password" placeholder="senha" value={password} required onChange={(e) => setPassword(e.target.value)} disabled={isLoading}>
         </Input>
         <Submit type="submit" disabled={isLoading}> {isLoading? <Loading /> : "Entrar"}</Submit>
        </Form>
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
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;

`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;

