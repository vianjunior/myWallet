import React from 'react';
import {ThemeProvider} from 'styled-components'
import GlobalStyles from './styles/GlobalStyles';

import Router from './routes'

import dark from './styles/themes/dark';
//import light from './styles/themes/light'

const App: React.FC = () => {
    return (
        <ThemeProvider theme={dark}>
            <GlobalStyles />
            <Router />
        </ThemeProvider>
    )
}

export default App;