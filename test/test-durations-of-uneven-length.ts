import test from 'ava'
import moment from 'moment'

/**
 * Library under test
 */

import { nextSessionOpen } from '../src/next-session-open'


test("should return next session's open when argument is not start of session and session is of variable length", t => {
    const now = moment.utc().startOf('month').subtract(1, 'month').add(1, 'day')
    const expected = now.clone().add(1, 'month').startOf('month').toDate()
    t.deepEqual(expected, nextSessionOpen('1M', now.toDate()))
})
