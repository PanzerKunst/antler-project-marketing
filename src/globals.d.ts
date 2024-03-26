declare global {
  /* eslint-disable */
  interface Window {
    plausible: (
      eventName: string,
      options?: {
        props: {
          [key: string]: any
        }
      }
    ) => void;
  }
  /* eslint-disable */
}

export {}
