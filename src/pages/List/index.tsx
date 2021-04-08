import React, {useMemo, useState, useEffect} from 'react';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import HistoryCard from '../../components/HistoryCard';

import Utils from '../../utils/walletUtils';

import {Container, Content, Filters} from  './styles'

import profit from '../../repositories/profit';
import debt from '../../repositories/debt';

interface IRouteParams {
    match: {
        params: {
            type: string;
        }
    }
}

interface iData {
    id: number;
    description: string;
    amountFormatted: string;
    type: string;
    frequency: string;
    dateFormatted: string;
    tagColor: string;
}

const months = [
    {value: 4, label: 'Abril'},
    {value: 5, label: 'Maio'},
    {value: 6, label: 'Junho'}
]

const years = [
    {value: 2020, label: '2020'}
]

const List: React.FC<IRouteParams> = ({match}) => {

    const [data, setData] = useState<iData[]>([]);

    const {type} = match.params;

    const contentProps = useMemo(() => {
        return type === 'profit' ? 
            {
                title:'Entradas', 
                lineColor: '#F7931B',
                content: profit
            } 
            : 
            {
                title:'Saídas', 
                lineColor: '#E44C4E',
                content: debt
            }
    },[type]);


    useEffect(() => {
        const lista = contentProps.content.map(item => {
            return {
                id: Math.random() * contentProps.content.length,
                description: item.description,
                amountFormatted: Utils.formatCurrency(item.amount),
                type: item.type,
                frequency: item.frequency,
                dateFormatted: Utils.formatDate(item.date),
                tagColor: item.frequency === 'recorrente' ? '#E44C4E' : '#4E41F0' 
            }
        })
        setData(lista);
    }, [contentProps]);

    return(
        <Container>
            <ContentHeader title={contentProps.title} lineColor={contentProps.lineColor}>
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
                {
                    data.map(item => (
                        <HistoryCard 
                            key={item.id}
                            tagColor={item.tagColor}
                            title={item.description}
                            subtitle={item.dateFormatted}
                            amount={item.amountFormatted}
                        />
                    ))
                }
            </Content>
        </Container>
    );
}

export default List;