import { ReactElement } from "react"

import "./IconWithSquareBorder.scss"

type Props = {
  children: ReactElement; // Expecting a single element
}

export function IconWithSquareBorder({ children }: Props) {
  return (
    <div className="icon-with-square-border">
      {children}
    </div>
  )
}
