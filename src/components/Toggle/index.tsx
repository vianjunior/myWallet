import React, {useState} from 'react';

import {Container, ToggleLabel, ToggleSelector} from './styles'

const Toggle: React.FC = () => {

    const [currentTheme, changeTheme] = useState(true);

    return(
        <Container>
            <ToggleLabel>Light</ToggleLabel>
                <ToggleSelector 
                    checked= {currentTheme}
                    uncheckedIcon={false}
                    checkedIcon={false}
                    onChange={() => changeTheme(!currentTheme)}
                />
            <ToggleLabel>Dark</ToggleLabel>
        </Container>
    )
}

export default Toggle;