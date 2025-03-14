export interface Shortcut {
    id: string;
    name: string;
    actions: Array<string>;
    createdAt: Date;
    updatedAt: Date;
}

export interface UserSettings {
    theme: 'light' | 'dark';
    language: string;
    notificationsEnabled: boolean;
}