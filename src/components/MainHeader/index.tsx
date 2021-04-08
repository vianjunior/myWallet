import React, {useMemo} from 'react';

import {Container, Profile, Welcome, UserName} from './styles'

import Utils from '../../utils/walletUtils';

import Toggle from '../Toggle'

const MainHeader: React.FC = () => {

    const emoji = useMemo(() => {
        return Utils.getRandomEmoji();
    }, []);

    return(
        <Container>
            <Toggle />

            <Profile>
                <Welcome>Olá, {emoji}</Welcome>
                <UserName>Juninho</UserName>
            </Profile>
        </Container>
    );
}

export default MainHeader;