import React from 'react';

const Preview: React.FC<{ shortcut: any }> = ({ shortcut }) => {
    return (
        <div className="preview">
            <h2>Shortcut Preview</h2>
            {shortcut ? (
                <div>
                    <h3>{shortcut.name}</h3>
                    <p>{shortcut.description}</p>
                    <ul>
                        {shortcut.actions.map((action: any, index: number) => (
                            <li key={index}>{action}</li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>No shortcut selected. Please create or select a shortcut to preview.</p>
            )}
        </div>
    );
};

export default Preview;