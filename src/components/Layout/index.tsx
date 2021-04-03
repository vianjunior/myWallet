import React from 'react';

import {Grid} from './styles';

import MainHeader from '../MainHeader';
import Aside from '../Aside';
import CentralContent from '../CentralContent';

const Layout: React.FC = () => {
    return(
        <Grid>
            <MainHeader />
            <Aside />
            <CentralContent />
        </Grid>
    );
}

export default Layout;