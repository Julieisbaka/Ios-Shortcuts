import React from 'react';
import { Shortcut } from '../types';

interface ShortcutListProps {
    shortcuts: Shortcut[];
    onSelectShortcut: (shortcut: Shortcut) => void;
}

const ShortcutList: React.FC<ShortcutListProps> = ({ shortcuts, onSelectShortcut }) => {
    return (
        <div>
            <h2>Your Shortcuts</h2>
            <ul>
                {shortcuts.map((shortcut) => (
                    <li key={shortcut.id} onClick={() => onSelectShortcut(shortcut)}>
                        {shortcut.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ShortcutList;