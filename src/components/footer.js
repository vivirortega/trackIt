import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <FooterInfo>
            <Link to="/habitos">
            <p>Hábitos</p>
            </Link>
            <Link to="/hoje">
            <p>Hoje</p>
            </Link>
            <Link to="/historico">
            <p>Histórico</p>
            </Link>
        </FooterInfo>
    )
}

const FooterInfo = styled.footer`
    width: 375px;
    height: 70px;
    position: fixed;
    bottom: 0;
    background-color: #FFFFFF;
    display: flex;
    justify-content: space-around;
    align-items: center;
p {
    color: #52B6FF;
    font-size: 17.976px;
    line-height: 22px;
}

a {
    text-decoration: none;
}
`;
