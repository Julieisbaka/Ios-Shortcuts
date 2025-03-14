import React from 'react';
import { ShortcutList } from '../components/ShortcutList';
import { Toolbar } from '../components/Toolbar';

const Dashboard: React.FC = () => {
    return (
        <div>
            <h1>iOS Shortcut Dashboard</h1>
            <Toolbar />
            <ShortcutList />
        </div>
    );
};

export default Dashboard;