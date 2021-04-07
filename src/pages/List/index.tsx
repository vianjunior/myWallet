import React from 'react';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import HistoryCard from '../../components/HistoryCard';

import {Container, Content, Filters} from  './styles'

const months = [
    {value: 4, label: 'Abril'},
    {value: 5, label: 'Maio'},
    {value: 6, label: 'Junho'}
]

const years = [
    {value: 2020, label: '2020'}
]

const List: React.FC = () => {
    return(
        <Container>
            <ContentHeader title="Saídas" lineColor="#E44C4E">
                <SelectInput options={months}/>
                <SelectInput options={years}/>
            </ContentHeader>

            <Filters>
                <button 
                    type="button"
                    className="tag-filter tag-filter-recurrent"
                >
                    Recorrentes
                </button>

                <button 
                    type="button"
                    className="tag-filter tag-filter-eventual"
                >
                    Eventuais
                </button>
            </Filters>

            <Content>
                <HistoryCard 
                    tagColor="#E44C4e"
                    title="Conta de Luz"
                    subtitle="22/07/2020"
                    amount="R$ 150,00"
                />
                <HistoryCard 
                    tagColor="#E44C4e"
                    title="Conta de Luz"
                    subtitle="22/07/2020"
                    amount="R$ 175,00"
                />
                <HistoryCard 
                    tagColor="#E44C4e"
                    title="Conta de Luz"
                    subtitle="22/07/2020"
                    amount="R$ 149,70"
                />
            </Content>
        </Container>
    );
}

export default List;