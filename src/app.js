import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import SignUp from "./components/signup";
import Habits from "./components/habits";
import Today from "./components/today"
import Historic from "./components/historic";

export default function App() {
    return (
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<SignUp />} />
        <Route path="/habitos" element={<Habits />} />
        <Route path="/hoje" element={<Today />} />
        <Route path="/historico" element={<Historic />} />
        </Routes>
        </BrowserRouter>
    )
}