/**
 * next-session-open
 * Return date of next session-open (inclusive)
 */

import D from 'od'
import ow from 'ow'
import getRecentSessions from '@strong-roots-capital/get-recent-sessions'
import { addTimeframe } from '@strong-roots-capital/add-timeframe'
import { inTradingviewFormat } from '@strong-roots-capital/is-tradingview-format'


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

    ow(timeframe, ow.string.is(inTradingviewFormat))
    ow(from, ow.date)

    const now = D.startOf('minute', from)
    const lastSessionOpen = getRecentSessions(timeframe, now).pop()!

    const nextSessionOpen = now.getTime() === lastSessionOpen
        ? now
        : addTimeframe(timeframe, new Date(lastSessionOpen))

    return nextSessionOpen
}
