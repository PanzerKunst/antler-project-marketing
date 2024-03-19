import classNames from "classnames"
import { useEffect, useRef, useState } from "react"
import { Link, useLocation } from "react-router-dom"

import { useAppContext } from "../../../AppContext.tsx"
import { useViewportSize } from "../../../Util/BrowserUtils.ts"
import { ScrollToHeaderButton } from "./ScrollToHeaderButton.tsx"

import s from "/src/UI/_CommonStyles/_exports.module.scss"
import "./AppHeader.scss"

const headerHeight = parseInt(s.headerHeight!)
let lastScrollY = window.scrollY

export function AppHeader() {
  const appContext = useAppContext()
  const { headerTitle } = appContext

  const location = useLocation()

  const viewportWidth = useViewportSize().width
  const viewportWidthMd = parseInt(s.vwMd || "")
  const isMobile = viewportWidth < viewportWidthMd

  const isLandingPage = location.pathname === "/"

  const headerRef = useRef<HTMLHeadingElement>(null)
  const [isMenuOpen /* TODO , setIsMenuOpen*/] = useState(false)

  useEffect(() => {
    const header = headerRef.current

    if (!header) {
      return
    }

    const handleScroll = !isMobile || isLandingPage ? handleScrollDesktop : handleScrollMobile

    function handleScrollMobile() {
      const currentScrollY = window.scrollY
      const delta = currentScrollY - lastScrollY
      const headerBottomPos = parseInt(header!.style.bottom)

      // Header always shown when scrolled near the top
      let newBottomPos = 0

      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY) { // Scrolling down
          const isHeaderFullyHidden = headerBottomPos === -headerHeight

          newBottomPos = isHeaderFullyHidden
            ? -headerHeight
            : Math.max(headerBottomPos - delta, -headerHeight)

        } else { // Scrolling up
          const isHeaderFullyVisible = headerBottomPos === 0

          newBottomPos = isHeaderFullyVisible
            ? 0
            : Math.min(headerBottomPos - delta, 0)
        }
      }

      header!.style.bottom = `${newBottomPos}px`

      lastScrollY = currentScrollY
    }

    function handleScrollDesktop() {
      const currentScrollY = window.scrollY
      const delta = currentScrollY - lastScrollY
      const headerTopPos = parseInt(header!.style.top)

      // Header always shown when scrolled near the top
      let newTopPos = 0

      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY) { // Scrolling down
          const isHeaderFullyHidden = headerTopPos === -headerHeight

          newTopPos = isHeaderFullyHidden
            ? -headerHeight
            : Math.max(headerTopPos - delta, -headerHeight)

        } else { // Scrolling up
          const isHeaderFullyVisible = headerTopPos === 0

          newTopPos = isHeaderFullyVisible
            ? 0
            : Math.min(headerTopPos - delta, 0)
        }
      }

      header!.style.top = `${newTopPos}px`

      lastScrollY = currentScrollY
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [isLandingPage, isMobile])

  return (
    <div className="app-header-wrapper">
      <header
        ref={headerRef}
        className={classNames({
          "desktop-or-landing": !isMobile || isLandingPage,
          mobile: isMobile,
          "menu-open": isMenuOpen
        })}
        style={!isMobile || isLandingPage ? { top: 0 } : { bottom: 0 }}
      >
        <div className="image-placeholder"/>

        {headerTitle && <h2>{headerTitle}</h2>}

        {isLandingPage ? (
          <nav>
            <ScrollToHeaderButton label="Why" scrollToCssSelector="#why"/>
            <ScrollToHeaderButton label="Modules" scrollToCssSelector="#product-modules"/>
            <ScrollToHeaderButton label="Oversight" scrollToCssSelector="#product-oversight"/>
            <ScrollToHeaderButton label="Pricing" scrollToCssSelector="#pricing"/>
            <Link to="/about" className="underlined appears">About</Link>
            <Link to="/contact" className="underlined appears">Contact us</Link>
          </nav>
        ) : <div className="image-placeholder"/>}
      </header>
    </div>
  )
}
