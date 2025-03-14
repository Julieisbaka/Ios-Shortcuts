# iOS Shortcut Web App

## Overview
The iOS Shortcut Web App is a multipage web application designed to help users create, edit, and manage iOS shortcuts. The application provides a user-friendly interface for interacting with shortcuts, allowing users to save their creations and customize settings.

## Features
- **Dashboard**: A landing page that provides an overview of available shortcuts and navigation options.
- **Editor**: A dedicated page for creating and editing iOS shortcuts with a user-friendly interface.
- **Preview**: A live preview of the shortcut being created or edited.
- **Shortcut List**: A comprehensive list of all available shortcuts for easy management.
- **Toolbar**: Quick access to save, load, and manage shortcuts.
- **Settings**: Configuration options for user preferences and app settings.

## Project Structure
```
ios-shortcut-webapp
├── src
│   ├── app.ts
│   ├── components
│   │   ├── Editor.tsx
│   │   ├── Preview.tsx
│   │   ├── ShortcutList.tsx
│   │   └── Toolbar.tsx
│   ├── pages
│   │   ├── Dashboard.tsx
│   │   ├── Editor.tsx
│   │   └── Settings.tsx
│   ├── services
│   │   ├── api.ts
│   │   └── shortcuts.ts
│   └── types
│       └── index.ts
├── public
│   ├── index.html
│   └── manifest.json
├── package.json
├── tsconfig.json
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm (Node package manager)

### Installation
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/ios-shortcut-webapp.git
   ```
2. Navigate to the project directory:
   ```
   cd ios-shortcut-webapp
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Running the Application
To start the development server, run:
```
npm start
```
The application will be available at `http://localhost:3000`.

### Building for Production
To create a production build, run:
```
npm run build
```
The build files will be generated in the `dist` directory.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.