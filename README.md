# React ScreenFlow 🚀

A smooth and elegant animation component for React, powered by **framer-motion**. Perfect for page transitions, modals, and more!

---

## ✨ Features

- 🎨 **Multiple Animation Types**: Choose from `elegantSlide`, `smoothFade`, `materialScale`, `cardFlip`, `elastic`, and `swoosh`.
- ⚡️ **Optimized Performance**: Uses `framer-motion` for buttery-smooth animations.
- 🌟 **Highly Customizable**: Add your own styles and animations with ease.
- 🛠️ **TypeScript Support**: Fully typed for a better developer experience.
- 📦 **Lightweight**: Minimal dependencies, optimized for production.

---

## 📥 Installation

Install the package using npm or yarn:

```sh
npm install react-screenflow
```

or

```sh
yarn add react-screenflow
```

### Required Dependency

Ensure `framer-motion` is installed for animations to work:

```sh
npm install framer-motion
```

or

```sh
yarn add framer-motion
```

---

## 🚀 Usage

Here’s a simple example of how to use the `ScreenFlow` component in your React application:

```tsx
import React from 'react';
import { ScreenFlow } from 'react-screenflow';

function App() {
  return (
    <ScreenFlow animation="smoothFade">
      <div>
        <h1>Welcome to My App</h1>
        <p>This content will animate smoothly!</p>
      </div>
    </ScreenFlow>
  );
}

export default App;
```

---

## 🔗 Demo

Check out a live demo on CodeSandbox:

[**View Demo on CodeSandbox**](https://codesandbox.io/p/sandbox/react-screenflow-6mjdkh)

🔍 **Preview**: [Live Preview](https://6mjdkh.csb.app/)

🌐 **Official Website**: [React ScreenFlow](https://react-screenflow.vercel.app/)

---

## ⚙️ Props

| Prop        | Type                                    | Default        | Description                            |
|------------|----------------------------------------|----------------|----------------------------------------|
| `animation` | `keyof typeof animations`              | `elegantSlide` | Animation type                        |
| `mode`      | `"wait" \| "sync" \| "popLayout"`      | `"wait"`       | Defines how multiple animations work  |
| `className` | `string`                               | `""`           | Custom class for the wrapper          |

---

## 🎞️ Animation Types

Your package supports the following animations:

- **elegantSlide**: Smooth slide with blur effect.
- **smoothFade**: Fade with subtle scale and vertical movement.
- **materialScale**: Material Design-inspired scale and slide.
- **cardFlip**: Flip animation for card-like transitions.
- **elastic**: Bouncy, elastic animations.
- **swoosh**: Fast, swooshing motion.

---

## 📦 Dependencies

This package requires the following dependencies:

- **framer-motion**: ^10.16.4
- **react**: ^18.2.0
- **react-dom**: ^18.2.0
- **react-router-dom**: ^6.18.0

---

## 🛠️ Development

### Build the Package

```sh
npm run build
```

### Run in Development Mode

```sh
npm run dev
```

### Preview the Build

```sh
npm run preview
```

---

## 🏗️ Tech Stack

- **React**: Core UI library.
- **framer-motion**: Animation engine.
- **Vite**: Build tool for fast development and production builds.
- **TypeScript**: Type-safe development.

---

## 📜 License

MIT © [Milan Patel](https://github.com/MilanPatel2003)

---

## 🔗 GitHub Repository

Find the source code and contribute at:  
[**MilanPatel2003/react-screenflow**](https://github.com/MilanPatel2003/react-screenflow)

---

## 🤝 Contributing

Contributions are welcome! Follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/YourFeature`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/YourFeature`.
5. Open a pull request.

---

## 💡 Support

If you find this package useful, consider giving it a ⭐️ on [GitHub](https://github.com/MilanPatel2003/react-screenflow)!

---

Made with ❤️ by [Milan Patel](https://github.com/MilanPatel2003)

