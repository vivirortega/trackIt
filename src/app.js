import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import SignUp from "./components/signup";
import Habits from "./components/habits";
import Today from "./components/today"
import Historic from "./components/historic";
import UserContext from "./contexts/usercontext";
import { useState } from "react";

export default function App() {
    const [token, setToken] = useState("");
    const [image, setImage] = useState("");

    return (
        <UserContext.Provider value={{token, setToken, setImage, image}}>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<SignUp />} />
        <Route path="/habitos" element={<Habits />} />
        <Route path="/hoje" element={<Today />} />
        <Route path="/historico" element={<Historic />} />
        </Routes>
        </BrowserRouter>
        </UserContext.Provider>
    )
}