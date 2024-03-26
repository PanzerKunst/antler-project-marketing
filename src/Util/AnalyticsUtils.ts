/* eslint-disable no-unused-vars */
export enum AnalyticsEvent {
  SUBSCRIBE_TO_MAILING_LIST = "SUBSCRIBE_TO_MAILING_LIST"
}
/* eslint-enable no-unused-vars */

export function triggerAnalyticsEvent(event: AnalyticsEvent) {
  if (!window.plausible) return

  window.plausible(event)
}
