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
                <MenuItemLink href='/dashboard'>
                    <MdDashboard></MdDashboard>
                    Dashboard
                </MenuItemLink>
                <MenuItemLink href='/list/profit'>
                    <MdArrowUpward></MdArrowUpward>
                    Entradas
                </MenuItemLink>
                <MenuItemLink href='/list/debt'>
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