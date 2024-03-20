import { scrollIntoView } from "../../../Util/BrowserUtils.ts"

type Props = {
  label: string;
  scrollToCssSelector: string;
  onClick?: () => void;
}

export function ScrollToHeaderButton({ label, scrollToCssSelector, onClick = () => {} }: Props) {
  const handleClick = () => {
    onClick()

    const scrollToElement = document.querySelector(scrollToCssSelector)
    scrollIntoView(scrollToElement)
  }

  return (
    <button className="button transparent" onClick={handleClick}>
      <span>{label}</span>
    </button>
  )
}
