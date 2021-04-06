import React from 'react';

import {Container, Title, Filters} from './styles';

interface ContentHeaderProps {
    title: string;
    lineColor: string;
    children: React.ReactNode;
}

const ContentHeader: React.FC<ContentHeaderProps> = ({title, lineColor, children}) => {

    return(
        <Container>
            <Title lineColor={lineColor}>
                <h1>{title}</h1>
            </Title>
            <Filters>
                {children}
            </Filters>
        </Container>
    );
}

export default ContentHeader;