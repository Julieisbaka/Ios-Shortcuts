import React, { useState } from 'react';

const Editor: React.FC = () => {
    const [shortcutName, setShortcutName] = useState('');
    const [shortcutActions, setShortcutActions] = useState<string[]>([]);

    const handleAddAction = (action: string) => {
        setShortcutActions([...shortcutActions, action]);
    };

    const handleRemoveAction = (index: number) => {
        const newActions = shortcutActions.filter((_, i) => i !== index);
        setShortcutActions(newActions);
    };

    const handleSaveShortcut = () => {
        // Logic to save the shortcut
        console.log('Saving shortcut:', { name: shortcutName, actions: shortcutActions });
    };

    return (
        <div>
            <h2>Create or Edit Shortcut</h2>
            <input
                type="text"
                value={shortcutName}
                onChange={(e) => setShortcutName(e.target.value)}
                placeholder="Shortcut Name"
            />
            <div>
                <h3>Actions</h3>
                {shortcutActions.map((action, index) => (
                    <div key={index}>
                        <span>{action}</span>
                        <button onClick={() => handleRemoveAction(index)}>Remove</button>
                    </div>
                ))}
                <button onClick={() => handleAddAction('New Action')}>Add Action</button>
            </div>
            <button onClick={handleSaveShortcut}>Save Shortcut</button>
        </div>
    );
};

export default Editor;