import styled from "styled-components";
import logo from "./../assets/logotrackit.png";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const navigate = useNavigate();
    console.log(email, password, name, image)

    function signUpUser(event) {
     event.preventDefault()
      
     const data = {
      email,
      password,
      name,
      image
    };

    const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", data);

    promise.then(response => {
      console.log(response);
      navigate("/");
    })
    promise.catch(error => console.log(error.response));
  }


    return (
        <Container>
         <img src={logo}/>
         <Form onSubmit={signUpUser}>
         <Input type="email" placeholder="email" value={email} required onChange={(e) => setEmail(e.target.value)}></Input>
         <Input type="password" placeholder="senha" value={password} required onChange={(e) => setPassword(e.target.value)}></Input>
         <Input type="text" placeholder="nome" value={name} required onChange={(e) => setName(e.target.value)}></Input>
         <Input type="url" placeholder="foto" value={image} required maxlength="100" onChange={(e) => setImage(e.target.value)}></Input>
         <Submit>Cadastrar</Submit>
         </Form>
         <Link to="/">
         <p>Já tem uma conta? Faça login!</p>
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

const Form = styled.form`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 6px;
`;