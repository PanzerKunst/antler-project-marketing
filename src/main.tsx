import { SpeedInsights } from "@vercel/speed-insights/react"
import dayjs from "dayjs"
import React from "react"
import ReactDOM from "react-dom/client"

import "dayjs/locale/sv"
import { App } from "./UI/App.tsx"
import { getScrollbarWidth, isTouchDevice } from "./Util/BrowserUtils.ts"
import { config } from "./config.ts"

import "./main.scss"

dayjs.locale("sv")

export const isTouch = isTouchDevice()

document.body.style.setProperty("--scrollbar-width", `${getScrollbarWidth()}px`)

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App/>
    {config.IS_PROD && <SpeedInsights />}
  </React.StrictMode>
)
