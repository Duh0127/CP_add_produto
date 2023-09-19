import React from 'react';
import * as S from './styles';
import { Link, useNavigate } from 'react-router-dom';


export default function Navbar() {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/');
    }

    return (
        <S.Header>
            <S.LogoDiv onClick={handleHomeClick}>
                <S.LogoImg src="https://logodownload.org/wp-content/uploads/2016/10/porto-seguro-logo-0.png" alt="Logo do site" />
            </S.LogoDiv>
            <S.Navbar>
                    <S.NavbarLink><Link style={({ height: "100%", display: "flex", alignItems:"center", color:"#7d7d7d", textDecoration: "none" })} to="/">Home</Link></S.NavbarLink>
                    <S.NavbarLink><Link style={({ height: "100%", display: "flex", alignItems:"center", color:"#7d7d7d", textDecoration: "none" })} to="/produtos">Produtos</Link></S.NavbarLink>
                </S.Navbar>
        </S.Header>
    );
}