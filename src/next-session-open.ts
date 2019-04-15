/**
 * next-session-open
 * Return date of next session-open (inclusive)
 */

const debug = require('debug')('next-session-open')

import ow from 'ow'
import moment from 'moment'
import session from 'market-session'
import getRecentSessions from '@strong-roots-capital/get-recent-sessions'
import { addTimeframe } from '@strong-roots-capital/add-timeframe'


/**
 * Return date corresponding to next session-open after `from`,
 * inclusive.
 *
 * @remarks
 * Dates are resolved to the start of the last minute (seconds are
 * dropped).
 *
 * Inclusive, meaning if `from` *is* the start of a session, return
 * `from`
 *
 * @param timeframe - Timeframe of session, in TradingView format
 * @param from - Starting time used in calculation of next open-session
 * @returns Date of next session-open
 */
export function nextSessionOpen(timeframe: string, from: Date): Date {

    ow(from, ow.date)

    const now = moment.utc(from).startOf('minute')
    const [lastSessionOpen, ..._] = getRecentSessions(timeframe, now.toDate()).reverse()

    const nextSessionOpen = now.isSame(lastSessionOpen)
        ? now.toDate()
        : addTimeframe(timeframe, new Date(lastSessionOpen))

    debug(`now is:             ${now.toISOString()}`)
    debug(`lastSessionOpen is: ${moment.utc(lastSessionOpen).toISOString()}`)
    debug(`nextSessionOpen is: ${nextSessionOpen.toISOString()}`)

    return nextSessionOpen
}
