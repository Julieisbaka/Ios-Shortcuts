import { Shortcut } from '../types';

const SHORTCUTS_KEY = 'ios_shortcuts';

export const getShortcuts = (): Shortcut[] => {
    const shortcuts = localStorage.getItem(SHORTCUTS_KEY);
    return shortcuts ? JSON.parse(shortcuts) : [];
};

export const saveShortcut = (shortcut: Shortcut): void => {
    const shortcuts = getShortcuts();
    const updatedShortcuts = [...shortcuts, shortcut];
    localStorage.setItem(SHORTCUTS_KEY, JSON.stringify(updatedShortcuts));
};

export const updateShortcut = (updatedShortcut: Shortcut): void => {
    const shortcuts = getShortcuts();
    const index = shortcuts.findIndex(shortcut => shortcut.id === updatedShortcut.id);
    if (index !== -1) {
        shortcuts[index] = updatedShortcut;
        localStorage.setItem(SHORTCUTS_KEY, JSON.stringify(shortcuts));
    }
};

export const deleteShortcut = (id: string): void => {
    const shortcuts = getShortcuts();
    const updatedShortcuts = shortcuts.filter(shortcut => shortcut.id !== id);
    localStorage.setItem(SHORTCUTS_KEY, JSON.stringify(updatedShortcuts));
};