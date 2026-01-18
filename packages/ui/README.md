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

To use the components, you need to configure Tailwind CSS to scan the package's files and use the custom plugin.

1. Add the package's paths to your `tailwind.config.js` `content` array so Tailwind scans the library.
2. Add the `raduiPlugin` to your `plugins` array to include the custom theme and variables.

```js
// tailwind.config.js
const { raduiPlugin } = require("@quarklab/rad-ui");

module.exports = {
  content: [
    // ... your other content paths
    "./node_modules/@quarklab/rad-ui/dist/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    raduiPlugin,
  ],
};
```

If you are using TypeScript (`tailwind.config.ts`):

```ts
import { raduiPlugin } from "@quarklab/rad-ui";

export default {
  content: [
    // ...
    "./node_modules/@quarklab/rad-ui/dist/**/*.js",
  ],
  plugins: [
    raduiPlugin,
  ],
}
```
