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
              <Link to="/contact" className="underlined appears">Contact</Link>
            </li>
          </ul>
        </nav>

        <div>
          <span>&copy; {dayjs().year()} Code:metis</span>
        </div>
      </div>
    </footer>
  )
}
