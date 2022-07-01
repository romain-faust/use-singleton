# @romain-faust/use-singleton

## Installation

_With [NPM](https://www.npmjs.com/)_:

```bash
npm install @romain-faust/use-singleton
```

_With [PNPM](https://pnpm.io/)_:

```bash
pnpm add @romain-faust/use-singleton
```

_With [Yarn](https://classic.yarnpkg.com/)_:

```bash
yarn add @romain-faust/use-singleton
```

### Dependencies

-   [react](https://www.npmjs.com/package/react) (>=16.8.6)

## Usage

<!-- prettier-ignore -->
```tsx
import { useSingleton } from '@romain-faust/use-singleton'

const RandomValue = () => {
    const value = useSingleton(() => Math.random())

    return <div>Random value: {value}</div>
}
```

## License

[MIT](./license.md)
