import dayjs from "dayjs"
import { Link } from "react-router-dom"

import "./AppFooter.scss"

export function AppFooter() {
  return (
    <footer className="app-footer">
      <div className="container">
        <nav>
          <ul className="styleless">
            <li>
              <Link to="/contact" className="underlined appears">Contact us</Link>
            </li>
          </ul>
        </nav>

        <div>
          <img src="/images/vite.svg" alt="logo"/>
          <span>&copy; {dayjs().year()}<br/>Code:metis</span>
        </div>
      </div>
    </footer>
  )
}
