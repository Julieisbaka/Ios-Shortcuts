import React from 'react';

const Settings: React.FC = () => {
    const [settings, setSettings] = React.useState({
        theme: 'light',
        notifications: true,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setSettings({
            ...settings,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSave = () => {
        // Logic to save settings (e.g., API call or local storage)
        console.log('Settings saved:', settings);
    };

    return (
        <div>
            <h1>Settings</h1>
            <form>
                <div>
                    <label>
                        Theme:
                        <select name="theme" value={settings.theme} onChange={handleChange}>
                            <option value="light">Light</option>
                            <option value="dark">Dark</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            name="notifications"
                            checked={settings.notifications}
                            onChange={handleChange}
                        />
                        Enable Notifications
                    </label>
                </div>
                <button type="button" onClick={handleSave}>Save Settings</button>
            </form>
        </div>
    );
};

export default Settings;