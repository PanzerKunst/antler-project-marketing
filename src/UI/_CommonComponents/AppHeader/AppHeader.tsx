import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import classNames from "classnames"
import { useEffect, useRef, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"

import { ScrollToHeaderButton } from "./ScrollToHeaderButton.tsx"
import { useAppContext } from "../../../AppContext.tsx"
import { scrollIntoView, useViewportSize } from "../../../Util/BrowserUtils.ts"

import { faBars } from "@fortawesome/free-solid-svg-icons"

import { Menu } from "../Menu.tsx"

import s from "/src/UI/_CommonStyles/_exports.module.scss"
import "./AppHeader.scss"

const headerHeight = parseInt(s.headerHeight!)
let lastScrollY = window.scrollY

export function AppHeader() {
  const appContext = useAppContext()
  const { headerTitle } = appContext

  const navigate = useNavigate()
  const location = useLocation()

  const viewportWidth = useViewportSize().width
  const viewportWidthLg = parseInt(s.vwLg || "")
  const isMobile = viewportWidth < viewportWidthLg

  const isLandingPage = location.pathname === "/"

  const headerRef = useRef<HTMLHeadingElement>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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

  const handleMenuItemClick = (cssSelector: string) => {
    setIsMenuOpen(false)
    const scrollToElement = document.querySelector(cssSelector)
    scrollIntoView(scrollToElement)
  }

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
        <Link to="/">
          <img src="/images/vite.svg" alt="logo"/>
          <span>Code:metis</span>
        </Link>

        {headerTitle && <h2>{headerTitle}</h2>}

        {isMobile ? (
          <button className="button icon-only" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        ) : (
          <nav>
            {isLandingPage && (
              <>
                <ScrollToHeaderButton label="Why" scrollToCssSelector="#why"/>
                <ScrollToHeaderButton label="Modules" scrollToCssSelector="#product-modules"/>
                <ScrollToHeaderButton label="Oversight" scrollToCssSelector="#product-oversight"/>
                <ScrollToHeaderButton label="Pricing" scrollToCssSelector="#pricing"/>
              </>
            )}
            <button className="button transparent" onClick={() => {
              navigate("/contact")
            }}>
              <span>Contact us</span>
            </button>
          </nav>
        )}
      </header>

      {isMenuOpen && ( /* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-to-interactive-role */
        <Menu close={() => setIsMenuOpen(false)}>
          <li role="button" onClick={() => handleMenuItemClick("#why")}>
            <span>Why</span>
          </li>
          <li role="button" onClick={() => handleMenuItemClick("#product-modules")}>
            <span>Modules</span>
          </li>
          <li role="button" onClick={() => handleMenuItemClick("#product-oversight")}>
            <span>Oversight</span>
          </li>
          <li role="button" onClick={() => handleMenuItemClick("#pricing")}>
            <span>Pricing</span>
          </li>
          <li role="link" onClick={() => {
            navigate("/contact")
            setIsMenuOpen(false)
          }}>
            <span>Contact us</span>
          </li>
        </Menu>
        /* eslint-enable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-to-interactive-role */
      )}
    </div>
  )
}
