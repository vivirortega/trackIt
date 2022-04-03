import Header from "./header";
import Footer from "./footer";
import styled from "styled-components";
import axios from "axios";
import { useState, useContext, useEffect } from "react";
import UserContext from "../contexts/usercontext";
import dayjs from "dayjs";
import 'dayjs/locale/pt-br';

export default function Today() {
  const [allHabits, setAllHabits] = useState([]);
  const { token } = useContext(UserContext);
  dayjs.locale('pt-br');
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  console.log(dayjs());

  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
      config
    );

    promise.then((response) => {
      console.log(response.data);
      setAllHabits(response.data);
    });

    promise.catch((error) => {
      console.log(error.response);
    });
  }, []);

  return (
    <>
      <Header />
      <Main>
        <h1>{dayjs().format('dddd, DD/MM')}</h1>
        {allHabits.map((habits) => {
          return (
            <Habit key={habits.id}>
              <p>{habits.name}</p>
              <input type="checkbox"></input>
            </Habit>
          );
        })}
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
  padding-top: 100px;

  h1 {
    font-size: 22.976px;
    line-height: 29px;
    color: #126ba5;
    padding-bottom: 50px;
  }
`;

const Habit = styled.section`
  width: 340px;
  height: 94px;
  background-color: #ffffff;
  border-radius: 5px;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  p {
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
    margin-top: 13px;
    margin-left: 15px;
  }

  input {
    width: 69px;
    height: 69px;
    background-color: #ebebeb;
    border: 1px solid #e7e7e7;
    border-radius: 5px;
    margin-right: 13px;
    margin-top: 13px;
  }
`;
