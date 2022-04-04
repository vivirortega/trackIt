import Header from "./header";
import Footer from "./footer";
import styled from "styled-components";
import axios from "axios";
import { useState, useContext, useEffect } from "react";
import UserContext from "../contexts/usercontext";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";

export default function Today() {
  const [allHabits, setAllHabits] = useState([]);
  const [refresh, setRefresh] = useState(0);
  const { token, setPercentage } = useContext(UserContext);
  dayjs.locale("pt-br");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const filter = allHabits.filter(checkIsMark);
  const percentage = Math.round((100 / allHabits.length) * filter.length);
  setPercentage(percentage);

  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
      config
    );

    promise.catch((error) => {});

    promise.then((response) => {
      setAllHabits(response.data);
    });
  }, [refresh]);

  function markHabit(id) {
    const promise = axios.post(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`,
      {},
      config
    );

    promise.catch((error) => {
      alert("Algo deu errado! Tente novamente mais tarde.");
    });

    promise.then((response) => {
      setRefresh(refresh + 1);
    });
  }

  function markOffHabit(id) {
    const promise = axios.post(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`,
      {},
      config
    );

    promise.catch((error) => {
      alert("Algo deu errado! Tente novamente mais tarde.");
    });

    promise.then((response) => {
      setRefresh(refresh + 1);
    });
  }

  function checkIsMark(obj) {
    if (obj.done) {
      return obj;
    }
  }
  return (
    <>
      <Header />
      <Main>
        <div className="title">
          <h1>{dayjs().format("dddd, DD/MM")}</h1>
          {percentage > 0 ? (
            <p className="conclude">{percentage}% dos hábitos concluídos.</p>
          ) : (
            <p className="no-conclude">Nenhum hábito concluído ainda</p>
          )}
        </div>

        {allHabits.map((habits) => {
          return (
            <Habit key={habits.id}>
              <div>
                <h2>{habits.name}</h2>
                <div className="p-row">
                  <p>Sequência atual:</p>{" "}
                  <p
                    className="row"
                    style={habits.done ? { color: "#8FC549" } : {}}
                  >
                    {habits.currentSequence} dias
                  </p>
                </div>
                <div className="p-row">
                  <p>Seu recorde:</p>{" "}
                  <p
                    className="row"
                    style={
                      habits.currentSequence >= habits.highestSequence &&
                      habits.done
                        ? { color: "#8FC549" }
                        : {}
                    }
                  >
                    {habits.highestSequence} dias
                  </p>
                </div>
              </div>
              <input
                type="checkbox"
                checked={habits.done ? "checked" : ""}
                onChange={
                  habits.done
                    ? () => markOffHabit(habits.id)
                    : () => markHabit(habits.id)
                }
              ></input>
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
  }

  .conclude {
    color: #8fc549;
    font-size: 17.976px;
    line-height: 22px;
    padding-bottom: 28px;
  }

  .no-conclude {
    font-size: 17.976px;
    line-height: 22px;
    color: #bababa;
    padding-bottom: 28px;
  }

  .p-row {
    display: flex;
    flex-direction: row;
  }
  .row {
    margin-left: 4px;
  }
  .title {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    padding-left: 17px;
  }
`;

const Habit = styled.section`
  width: 340px;
  height: 94px;
  background-color: #ffffff;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  h2 {
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
    margin-top: 13px;
    margin-left: 15px;
  }

  p {
    font-size: 12.976px;
    line-height: 16px;
    color: #666666;
    margin-left: 15px;
  }

  div {
    display: flex;
    flex-direction: column;
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

  input:checked {
    background-color: #8fc549;
  }
`;
