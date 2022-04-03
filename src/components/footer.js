import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <FooterInfo>
      <Link to="/habitos">
        <p>Hábitos</p>
      </Link>
      <Link to="/hoje">
        <div className="main-button">
        <p className="today-button">Hoje</p>
        </div>
      </Link>
      <Link to="/historico">
        <p>Histórico</p>
      </Link>
    </FooterInfo>
  );
}

const FooterInfo = styled.footer`
  width: 100%;
  height: 70px;
  position: fixed;
  bottom: 0;
  background-color: #ffffff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  p {
    color: #52b6ff;
    font-size: 17.976px;
    line-height: 22px;
    z-index: 1;
  }

  a {
    text-decoration: none;
  }

 .main-button{
  background-color: #52B6FF;
  width: 91px;
  height: 91px;
  border-radius: 100%;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  
 } 

 .today-button {
   color: white;
   text-align: center;
 }
`;
