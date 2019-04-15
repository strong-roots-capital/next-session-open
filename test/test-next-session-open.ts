import test from 'ava'
import moment from 'moment'

/**
 * Library under test
 */

import { nextSessionOpen } from '../src/next-session-open'


test('should return identity when argument is start of session', t => {
    const open = moment.utc().startOf('year').toDate()
    t.deepEqual(open, nextSessionOpen('12M', open))
})

test("should return next session's open when argument is not start of session", t => {
    const now = moment.utc().startOf('year').add(1, 'hour')
    const expected = now.clone().add(1, 'day').startOf('day').toDate()
    t.deepEqual(expected, nextSessionOpen('1D', now.toDate()))
})

test('should round times to start of prior minute', t => {
    const open = moment.utc().startOf('year').add(1, 'second')
    t.deepEqual(
        open.clone().subtract(1, 'second').toDate(),
        nextSessionOpen('12M', open.toDate())
    )
})
