import React from 'react';
import Editor from '../components/Editor';
import Toolbar from '../components/Toolbar';

const EditorPage: React.FC = () => {
    return (
        <div>
            <Toolbar />
            <h1>Edit iOS Shortcut</h1>
            <Editor />
        </div>
    );
};

export default EditorPage;