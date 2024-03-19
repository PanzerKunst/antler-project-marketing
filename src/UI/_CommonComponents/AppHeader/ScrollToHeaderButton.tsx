import { scrollIntoView } from "../../../Util/BrowserUtils.ts"

type Props = {
  label: string;
  scrollToCssSelector: string;
}

export function ScrollToHeaderButton({ label, scrollToCssSelector }: Props) {
  const handleClick = () => {
    const scrollToElement = document.querySelector(scrollToCssSelector)
    scrollIntoView(scrollToElement)
  }

  return (
    <button className="button transparent" onClick={handleClick}>
      <span>{label}</span>
    </button>
  )
}
