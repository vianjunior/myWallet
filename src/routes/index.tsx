import React from 'react';
import {BrowserRouter} from 'react-router-dom'

import AppRoutes from './app.routes'

const Router: React.FC = () => (
    <BrowserRouter>
        <AppRoutes />
    </BrowserRouter>
)

export default Router;
