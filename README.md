# TooltipsSandbox

A React + Vite sandbox for designing and previewing customizable tooltips with live settings and code generation.

## Features

- ⚡ Built with [Vite](https://vitejs.dev/) for fast development
- 🎨 Live tooltip customization (shape, trigger, position, colors, font size, width, icon, image)
- 🌗 Light/Dark theme toggle (remembers your preference)
- 🧪 Real-time tooltip preview
- 📋 Copy-paste ready React code snippet for your configuration
- 🖌️ Color pickers powered by [react-colorful](https://github.com/omgovich/react-colorful)
- 💨 Styled with [Tailwind CSS](https://tailwindcss.com/)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

Clone the repository and install dependencies:

```sh
git clone <your-repo-url>
cd TooltipsSandbox
npm install
```

### Running the App

Start the development server:

```sh
npm start
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```sh
npm run build
```

Preview the production build:

```sh
npm run preview
```

## Usage

- Use the settings panel to adjust tooltip options.
- See the live preview update instantly.
- Copy the generated code snippet and use it in your own React projects.

## Folder Structure

```
TooltipsSandbox/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Home.jsx
│   │   ├── Tooltip.jsx
│   │   └── SelectColor.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

## Customization

- Edit [`src/components/Tooltip.jsx`](src/components/Tooltip.jsx) to change tooltip logic or appearance.
- Update [`src/components/Home.jsx`](src/components/Home.jsx) to modify the UI or add new controls.

## Dependencies

- React 19
- react-dom 19
- react-colorful
- tailwindcss
- @vitejs/plugin-react
- @tailwindcss/vite


