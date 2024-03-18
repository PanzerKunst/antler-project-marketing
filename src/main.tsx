import { SpeedInsights } from "@vercel/speed-insights/react"
import dayjs from "dayjs"
import React from "react"
import ReactDOM from "react-dom/client"

import "dayjs/locale/sv"
import { App } from "./UI/App.tsx"
import { config } from "./config.ts"

import "./main.scss"

dayjs.locale("sv")

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App/>
    {config.IS_PROD && <SpeedInsights />}
  </React.StrictMode>
)
