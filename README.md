```markdown
# React ScreenFlow 🚀

A smooth and elegant animation component for React, powered by **framer-motion**. Perfect for page transitions, modals, and more!

## Features
- 🎨 **Multiple Animation Types**: Choose from `elegantSlide`, `smoothFade`, `materialScale`, `cardFlip`, `elastic`, and `swoosh`.
- ⚡️ **Optimized Performance**: Uses `framer-motion` for buttery-smooth animations.
- 🌟 **Highly Customizable**: Add your own styles and animations with ease.
- 🛠️ **TypeScript Support**: Fully typed for a better developer experience.
- 📦 **Lightweight**: Minimal dependencies, optimized for production.

## Installation

To install the package, use either npm or yarn:

```bash
npm install react-screenflow
```

or

```bash
yarn add react-screenflow
```

## Usage

Here’s a simple example of how to use the `ScreenFlow` component in your React application:

```javascript
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

## Props

| Prop        | Type                     | Default          | Description                          |
|-------------|--------------------------|------------------|--------------------------------------|
| `animation` | `keyof typeof animations`| `elegantSlide`   | Animation type                       |
| `mode`      | `"wait" | "sync" | "popLayout"` | `"wait"`           | How multiple animations are handled  |
| `className` | `string`                 | `""`             | Custom class for the wrapper         |

## Animation Types

Your package supports the following animations (defined in `ScreenFlow.tsx`):
- **elegantSlide**: Smooth slide with blur effect.
- **smoothFade**: Fade with subtle scale and vertical movement.
- **materialScale**: Material Design-inspired scale and slide.
- **cardFlip**: Flip animation for card-like transitions.
- **elastic**: Bouncy, elastic animations.
- **swoosh**: Fast, swooshing motion.

## Development

### Build the Package

To build the package, run:

```bash
npm run build
```

### Run in Development Mode

To start the development server with hot module replacement (HMR):

```bash
npm run dev
```

### Preview the Build

To preview the production build:

```bash
npm run preview
```

## Tech Stack
- **React