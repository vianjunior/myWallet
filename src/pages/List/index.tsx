import React from 'react';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import HistoryCard from '../../components/HistoryCard';

import {Container, Content} from  './styles'

const options = [
    {value: 'Juninho', label: 'Juninho'}
]

const List: React.FC = () => {
    return(
        <Container>
            <ContentHeader title="Saídas" lineColor="#E44C4E">
                <SelectInput options={options}/>
            </ContentHeader>

            <Content>
                <HistoryCard 
                    cardColor="#313862"
                    tagColor="#E44C4e"
                    title="Conta de Luz"
                    subtitle="22/07/2020"
                    amount="R$ 150,00"
                />
                <HistoryCard 
                    cardColor="#313862"
                    tagColor="#E44C4e"
                    title="Conta de Luz"
                    subtitle="22/07/2020"
                    amount="R$ 175,00"
                />
                <HistoryCard 
                    cardColor="#313862"
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