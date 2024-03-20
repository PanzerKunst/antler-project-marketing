import { createBrowserRouter, RouterProvider } from "react-router-dom"

import { ContactPage } from "./ContactPage.tsx"
import { LandingPage } from "./LandingPage.tsx"
import { Layout } from "./_CommonComponents/Layout.tsx"
import { AppContextProvider } from "../AppContext.tsx"

import "./App.scss"

const router = createBrowserRouter([
  {
    path: "/", element: <Layout/>, children: [
      { path: "/", element: <LandingPage/> },
      { path: "/contact", element: <ContactPage/> }
    ]
  }
])

export function App() {
  return (
    <AppContextProvider>
      <RouterProvider router={router}/>
    </AppContextProvider>
  )
}
