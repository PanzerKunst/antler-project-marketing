/* eslint-disable no-unused-vars */
export enum Button {
  SUBSCRIBE_TO_MAILING_LIST = "SUBSCRIBE_TO_MAILING_LIST"
}
/* eslint-enable no-unused-vars */

export function trackButtonClick(buttonName: string) {
  if (!window.plausible) return

  window.plausible("Button clicked", {
    props: { buttonName }
  })
}
