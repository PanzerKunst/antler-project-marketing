import { AnalyticsEvent } from "./Util/AnalyticsUtils.ts"

declare global {
  /* eslint-disable */
  interface Window {
    plausible: (event: AnalyticsEvent) => void;
  }
  /* eslint-disable */
}

export {}
