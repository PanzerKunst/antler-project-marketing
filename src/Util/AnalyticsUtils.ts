/* eslint-disable no-unused-vars */
export enum AnalyticsEvent {
  SUBSCRIBE_TO_MAILING_LIST = "SUBSCRIBE_TO_MAILING_LIST",
  CLICK_PRICE_CTA = "CLICK_PRICE_CTA"
}

/* eslint-enable no-unused-vars */

export type AnalyticsProps = {
  [key: string]: string;
}

export function triggerAnalyticsEvent(event: AnalyticsEvent, props?: AnalyticsProps) {
  if (!window.plausible) return

  const options = props ? { props } : undefined
  window.plausible(event, options)
}
