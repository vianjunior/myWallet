import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.main``;

export const Filters = styled.div`

    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 25px;

    .tag-filter {
        height: 37px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-size: 18px;
        font-weight: 500;
        background: none;
        color: ${props => props.theme.color.white};
        margin: 0 10px;

        transition: opacity .3s;
        opacity: .4;

        &:hover {
            opacity: .5;
        }
    }

    .tag-filter-recurrent::after {
        content: '';
        display: block;
        width: 50px;
        margin: 0 auto;
        border-bottom: 10px solid ${props => props.theme.color.warning}
    }
        
    .tag-filter-eventual::after {
        content: '';
        display: block;
        width: 50px;
        margin: 0 auto;
        border-bottom: 10px solid ${props => props.theme.color.success}
    }

    .tag-actived {
        opacity: 1;
    }

`;