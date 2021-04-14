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

const List: React.FC<IRouteParams> = ({match}) => {

    const [data, setData] = useState<iData[]>([]);
    const [selectedMonth, setMonth] = useState<string>(String(new Date().getMonth() + 1));
    const [selectedYear, setYear] = useState<string>(String(new Date().getFullYear()));
    const [selectedFrequency, setselectedFrequency] = useState<string[]>(['recorrente', 'eventual']);

    const {type} = match.params; // destructuring == match.params.type

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

    const years = useMemo(() => {
        let uniqueYears: number[] = [];

        contentProps.content.forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();

            if (!uniqueYears.includes(year)) {
                uniqueYears.push(year);
            }
        });

        return uniqueYears.map(year => {
            return {
                value: year,
                label: year
            }
        });

    }, [contentProps.content]);

    const handleFrequency = (frequency: string) => {
        const isSelected = selectedFrequency.findIndex(item => item === frequency);

        if (isSelected >= 0) {
            console.log('VAM');
            const filtered = selectedFrequency.filter(item => item !== frequency);
            setselectedFrequency(filtered)
        }
        else {
            console.log('BORA');
            setselectedFrequency((prev) => [...prev, frequency]);
        }
    };

    useEffect(() => {
        const filteredDates = contentProps.content.filter(item => {
            const date = new Date(item.date);
            const itemMonth = String(date.getMonth() + 1);
            const itemYear = String(date.getFullYear());

            return itemMonth === selectedMonth && itemYear === selectedYear && selectedFrequency.includes(item.frequency);
        });

        const formatedDates = filteredDates.map(item => {
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

        setData(formatedDates);

    }, [contentProps.content, selectedMonth, selectedYear, selectedFrequency]);

    return(
        <Container>
            <ContentHeader title={contentProps.title} lineColor={contentProps.lineColor}>
                <SelectInput 
                    options={Utils.getMonths()} 
                    onChange={e => setMonth(e.target.value)} 
                    dafaultValue={selectedMonth} 
                />
                <SelectInput 
                    options={years} 
                    onChange={e => setYear(e.target.value)} 
                    dafaultValue={selectedYear}
                />
            </ContentHeader>

            <Filters>
                <button 
                    type="button"
                    className={`tag-filter tag-filter-recurrent
                                ${selectedFrequency.includes('recorrente') && 'tag-actived'}`}
                    onClick={() => handleFrequency('recorrente')}
                >
                    Recorrentes
                </button>

                <button 
                    type="button"
                    className={`tag-filter tag-filter-eventual
                                ${selectedFrequency.includes('eventual') && 'tag-actived'}`}
                    onClick={() => handleFrequency('eventual')}
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