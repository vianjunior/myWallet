import React from 'react';

import {MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp} from 'react-icons/md'

import logoImg from '../../assets/logo.svg'

import {Container, Header, LogoImg, Menu, MenuItemLink, Title} from './styles'

const Aside: React.FC = () => {
    return(
        <Container>
            <Header>
                <LogoImg src={logoImg} alt='Logo My Wallet'/>
                <Title>Minha Carteira</Title>
            </Header>

            <Menu>
                <MenuItemLink href='#'>
                    <MdDashboard></MdDashboard>
                    Dashboard
                </MenuItemLink>
                <MenuItemLink href='#'>
                    <MdArrowUpward></MdArrowUpward>
                    Entradas
                </MenuItemLink>
                <MenuItemLink href='#'>
                    <MdArrowDownward></MdArrowDownward>
                    Saídas
                </MenuItemLink>
                <MenuItemLink href='#'>
                    <MdExitToApp></MdExitToApp>
                    Sair
                </MenuItemLink>
            </Menu>
        </Container>
    );
}

export default Aside;