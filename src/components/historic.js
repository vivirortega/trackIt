import Header from "./header";
import Footer from "./footer";
import styled from "styled-components";

export default function Historic() {
  return (
    <>
      <Header />
      <Main>
        <h1>Histórico</h1>
        <h2>Em breve você poderá ver o histórico dos seus hábitos aqui!</h2>
      </Main>
      <Footer />
    </>
  );
}

const Main = styled.main`
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;

  h1 {
    font-size: 22.976px;
    line-height: 29px;
    color: #126ba5;
    margin-top: calc(28px + 70px);
    padding-left: 17px;
    width: 100%;
  }

  h2 {
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
    margin-top: 17px;
    margin-left: 15px;
  }
`;
