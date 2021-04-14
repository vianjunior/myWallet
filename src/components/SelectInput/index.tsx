import React from 'react';

import {Container} from './styles';

interface ISelectInputProps {
    options: {
        value: string | number;
        label: string | number;
    }[],
    onChange(event: React.ChangeEvent<HTMLSelectElement>): void | undefined,
    dafaultValue?: string | number
}

const SelectInput: React.FC<ISelectInputProps> = ({options, onChange, dafaultValue}) => {
    return (
        <Container>
            <select onChange={onChange} defaultValue={dafaultValue}>
                {options.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </select>
        </Container>
    )
}

export default SelectInput;