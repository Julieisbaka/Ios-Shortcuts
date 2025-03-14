import React from 'react';

const Toolbar: React.FC<{ onSave: () => void; onLoad: () => void; }> = ({ onSave, onLoad }) => {
    return (
        <div className="toolbar">
            <button onClick={onSave}>Save Shortcut</button>
            <button onClick={onLoad}>Load Shortcut</button>
        </div>
    );
};

export default Toolbar;