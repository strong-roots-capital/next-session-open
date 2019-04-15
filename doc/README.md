
next-session-open [![Build status](https://travis-ci.org/strong-roots-capital/next-session-open.svg?branch=master)](https://travis-ci.org/strong-roots-capital/next-session-open) [![npm version](https://img.shields.io/npm/v/@strong-roots-capital/next-session-open.svg)](https://npmjs.org/package/@strong-roots-capital/next-session-open) [![codecov](https://codecov.io/gh/strong-roots-capital/next-session-open/branch/master/graph/badge.svg)](https://codecov.io/gh/strong-roots-capital/next-session-open)
======================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================

> Return date of next session-open (inclusive)

Install
-------

```shell
npm install @strong-roots-capital/next-session-open
```

Use
---

```typescript
import { nextSessionOpen } from '@strong-roots-capital/next-session-open'

const now = new Date()

console.log(now)
//=>2019-04-15T00:04:34.924Z

console.log(nextSessionOpen('1W', now))
//=>2019-04-22T00:00:00.000Z
```

Related
-------

*   [add-timeframe](https://gitlab.com/strong-roots-capital/add-timeframe)
*   [is-tradingview-format](https://github.com/strong-roots-capital/is-tradingview-format)

## Index

### Functions

* [nextSessionOpen](#nextsessionopen)

---

## Functions

<a id="nextsessionopen"></a>

###  nextSessionOpen

▸ **nextSessionOpen**(timeframe: *`string`*, from: *`Date`*): `Date`

*Defined in [next-session-open.ts:30](https://github.com/strong-roots-capital/next-session-open/blob/0c7a786/src/next-session-open.ts#L30)*

Return date corresponding to next session-open after `from`, inclusive.

*__remarks__*: Dates are resolved to the start of the last minute (seconds are dropped).

Inclusive, meaning if `from` _is_ the start of a session, return `from`

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| timeframe | `string` |  Timeframe of session, in TradingView format |
| from | `Date` |  Starting time used in calculation of next open-session |

**Returns:** `Date`
Date of next session-open

___

