import styled from 'styled-components'

export const Container = styled.div`
    grid-area: AS;
    background-color: ${props => props.theme.color.secondary};
    padding-left: 20px;
    border-right: 1px solid ${props => props.theme.color.gray}
`;

export const Header = styled.header`
    display: flex;
    height: 70px;
    align-items: center;
`;

export const LogoImg = styled.img`
    height: 40px;
    width: 40px;
`;

export const Title = styled.div`
    color: ${props => props.theme.color.white};
    margin-left: 10px;
`;

export const Menu = styled.nav`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
`;

export const MenuItemLink = styled.a`
    color: ${props => props.theme.color.info};
    text-decoration: none;
    margin: 7px 0;
    display: flex;
    align-items: center;
    transition: opacity .2s;

    &:hover {
        opacity: 70%
    }

    > svg {
        font-size: 18px;
        margin-right: 7px;
        margin-bottom: 1px;
    }
`;