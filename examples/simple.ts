import { nextSessionOpen } from '../src/next-session-open'

const now = new Date()

console.log(now)
//=>2019-04-15T00:04:34.924Z

console.log(nextSessionOpen('1W', now))
//=>2019-04-22T00:00:00.000Z
