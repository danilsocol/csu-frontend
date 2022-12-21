import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Main from '@Pages/Main';
import Admin from '@Pages/Admin/admin';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/admin" element={<Admin />} />
        </Routes>
    );
};

export default App;
