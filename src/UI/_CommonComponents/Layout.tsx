import { Outlet, ScrollRestoration } from "react-router-dom"

import { AppHeader } from "./AppHeader/AppHeader.tsx"

import "./Layout.scss"

export function Layout() {
  return (
    <>
      <AppHeader/>
      <Outlet />
      <ScrollRestoration />
    </>
  )
}
