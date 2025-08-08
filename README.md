# customize-appearance
Customize Appearance

# 🎨 Style Customizer App

![Vue](https://img.shields.io/badge/Vue-3.4-green)
![Vite](https://img.shields.io/badge/Vite-5.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6)
![Vitest](https://img.shields.io/badge/Vitest-1.0-FCC72B)

A real-time style customization dashboard built with Vue 3 and Vite that allows users to:
- Customize color schemes
- Preview changes instantly
- Save preferences to localStorage
- Reset to default styles

![App Screenshot](./screenshot.png) <!-- Add your screenshot later -->

## ✨ Features

- **Live Preview**: See changes in real-time
- **Color Validation**: Ensures valid HEX color inputs
- **Responsive Design**: Works on all device sizes
- **Persistent Settings**: Saves preferences between sessions
- **Type Safety**: Fully typed with TypeScript

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm 9+

### Installation
```bash
git clone https://github.com/your-username/customize-appearance.git
cd customize-appearance
npm install
```

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Testing
```bash
# Run unit tests
npm test

# Run tests with coverage
npm run test:coverage

# Watch mode for development
npm run test:watch
```

### 🛠️ Project Structure
```bash
customize-appearance/
├── src/
│   ├── __tests__/       # Specification testing
│   ├── assets/          # Static assets
│   ├── components/      # Vue components
│   ├── composables/     # Composition API logic
│   ├── types/           # TypeScript definitions
│   ├── utils/           # Utility functions
│   ├── App.vue          # Root component
│   └── main.ts          # Application entry
├── vite.config.ts       # Build configuration
└── package.json
```

###🤖 CI/CD Pipeline

This project uses GitHub Actions for:
- Automated Testing: Runs on every push to develop
- Auto Deployment: Deploys to GitHub Pages when merged to main
https://github.com/ecanquiz/customize-appearance/actions/workflows/deploy.yml/badge.svg

### 🛡️ Quality Assurance
- Type Checking: npm run type-check
- Unit Test Coverage: 95%+ (view coverage report in /coverage)

### 📚 Technologies Used
- Vue 3 - Progressive JavaScript Framework
- Vite - Next Generation Frontend Tooling
- TypeScript - Typed JavaScript
- Vitest - Blazing Fast Unit Test Framework
- GitHub Pages - Static Site Hosting

### 🌐 Live Demo
Check out the live demo:
https://ecanquiz.github.io/customize-appearance/

### 💡 IDE Setup
Recommended VS Code extensions:
- Volar - Vue 3 support

### 🤝 Contributing
- Fork the project
- Create your feature branch (git checkout -b feature/AmazingFeature)
- Commit your changes (git commit -m 'Add some AmazingFeature')
- Push to the branch (git push origin feature/AmazingFeature)
- Open a Pull Request to develop

### 📜 License
Distributed under the MIT License. See LICENSE for more information.

### 📧 Contact

Ernesto Canquiz - ernest.canquiz@gmail.com
Project Link: https://github.com/ecanquiz/customize-appearance

