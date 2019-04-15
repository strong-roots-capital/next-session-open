# next-session-open [![Build status](https://travis-ci.org/strong-roots-capital/next-session-open.svg?branch=master)](https://travis-ci.org/strong-roots-capital/next-session-open) [![npm version](https://img.shields.io/npm/v/@strong-roots-capital/next-session-open.svg)](https://npmjs.org/package/@strong-roots-capital/next-session-open) [![codecov](https://codecov.io/gh/strong-roots-capital/next-session-open/branch/master/graph/badge.svg)](https://codecov.io/gh/strong-roots-capital/next-session-open)

> Return date of next session-open (inclusive)

## Install

```shell
npm install @strong-roots-capital/next-session-open
```

## Use

```typescript
import { nextSessionOpen } from '@strong-roots-capital/next-session-open'

const now = new Date()

console.log(now)
//=>2019-04-15T00:04:34.924Z

console.log(nextSessionOpen('1W', now))
//=>2019-04-22T00:00:00.000Z
```

## Related

- [add-timeframe](https://gitlab.com/strong-roots-capital/add-timeframe)
- [is-tradingview-format](https://github.com/strong-roots-capital/is-tradingview-format)
