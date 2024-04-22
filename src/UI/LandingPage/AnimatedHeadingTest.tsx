import {easeIn, easeOut, motion, useAnimation} from "framer-motion"
import {useEffect} from "react"

import s from "/src/UI/_CommonStyles/_exports.module.scss"
import "./AnimatedHeading.scss"

const transition = {duration: s.animationDurationLg, ease: easeOut, delay: 1}

function getWordAnimationVariants(index: number) {
  return {
    initial: {opacity: 1, y: 0},
    animate: {
      y: [0, `${-index * 100}%`],
      transition
    }
  }
}

const secondAnimation = {
  animate: {
    x: "1em",
    transition: {duration: s.animationDurationSm, ease: easeIn}
  }
}

export function AnimatedHeadingTest() {
  const controlsC = useAnimation()

  useEffect(() => {
    const sequenceAnimation = async () => {
      await controlsC.start(getWordAnimationVariants(2).animate)
      await controlsC.start(secondAnimation.animate)
    }

    void sequenceAnimation()
  }, [controlsC])

  return (
    <motion.h1 className="animated-heading" initial="initial" animate="animate">
      <div className="words">
        <motion.span>G</motion.span>
        <motion.span variants={getWordAnimationVariants(1)}>R</motion.span>
        <motion.span animate={controlsC}>C</motion.span>
      </div>
    </motion.h1>
  )
}
