import Header from "./header";
import Footer from "./footer";
import styled from "styled-components";

export default function Historic() {
 
  return (
    <>
      <Header />
      <Main></Main>
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
`;
