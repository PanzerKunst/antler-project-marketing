import {easeOut, motion} from "framer-motion"
import {useEffect, useRef} from "react"

import s from "/src/UI/_CommonStyles/_exports.module.scss"
import "./AnimatedHeading.scss"

const transition = {duration: s.animationDurationLg, ease: easeOut, delay: 1}

const headingVariants = {
  initial: { width: "6.9em" },
  animate: { width: "3.35em", transition },
  exit: { overflow: "hidden" }
}

const riskVariants = {
  initial: {opacity: 1, y: 0},
  animate: {
    y: "-100%",
    transition
  }
}

const complianceVariants = {
  initial: {opacity: 1, y: 0},
  animate: {
    x: "0.67em",
    y: "-200%",
    transition
  }
}

const wordFadeOutVariants = {
  initial: {opacity: 1},
  animate: {opacity: 0, transition}
}

const addedLettersVariants = {
  initial: {opacity: 0},
  animate: {opacity: 1, transition: {duration: s.animationDurationLg, delay: transition.delay * 2}}
}

export function AnimatedHeading() {
  const headingRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const heading = headingRef.current

    if (!heading) {
      return
    }

    const totalAnimationDuration = transition.delay + parseInt(s.animationDurationLg!)

    setTimeout(() => {
      heading.classList.add("animation-complete")
    }, totalAnimationDuration * 1000)
  }, [])

  return (
    <motion.h1
      ref={headingRef}
      className="animated-heading"
      variants={headingVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="words">
        <motion.span>
          G
          <motion.span variants={wordFadeOutVariants}>overnance</motion.span>
        </motion.span>

        <motion.span variants={riskVariants}>
          R
          <motion.span variants={wordFadeOutVariants}>isk</motion.span>
        </motion.span>

        <motion.span variants={complianceVariants}>
          C
          <motion.span variants={wordFadeOutVariants}>ompliance</motion.span>
        </motion.span>
      </div>

      <motion.div className="added-letters" initial="initial" animate="animate"
        variants={addedLettersVariants}>
        <span>A</span>
        <span>E</span>
      </motion.div>
    </motion.h1>
  )
}
