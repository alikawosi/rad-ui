# @quarklab/rad-ui

A set of high-quality React components built with Radix UI and Tailwind CSS.

## Installation

```bash
npm install @quarklab/rad-ui
```

## Usage

Import components directly:

```tsx
import { Button } from "@quarklab/rad-ui";

export default function Home() {
  return <Button>Click me</Button>;
}
```

## Tailwind Setup

To use the components, you need to add the package's paths to your `tailwind.config.js` `content` array. This ensures that Tailwind generates the necessary CSS classes for the components.

```js
// tailwind.config.js
module.exports = {
  content: [
    // ... your other content paths
    "./node_modules/@quarklab/rad-ui/dist/**/*.js",
  ],
  // ... rest of your config
};
```

Make sure you also have the necessary theme variables (colors, border radius, etc.) defined in your CSS to match the design system.

