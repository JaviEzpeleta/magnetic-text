"use client"

import { MotionValue, motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useRef } from "react"

const MagneticText = ({ children }: { children: string }) => {
  const letters = children.split("")
  let mouseX = useMotionValue(Infinity)

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="mx-auto flex items-center w-full p-2 cursor-default select-none"
    >
      {letters.map((letter, i) => {
        if (letter === " ") {
          return (
            <span key={i} className="w-[0.3em]">
              &nbsp;
            </span>
          )
        } else {
          return <HoverableLetter mouseX={mouseX} letter={letter} key={i} />
        }
      })}
    </motion.div>
  )
}

function HoverableLetter({ mouseX, letter }: { mouseX: MotionValue; letter: string }) {
  let ref = useRef<HTMLSpanElement>(null)

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }
    return val - bounds.x - bounds.width / 2
  })

  let fontWeightSync = useTransform(distance, [-220, 0, 220], [100, 900, 100])
  let fontWeight = useSpring(fontWeightSync, { mass: 0.1, stiffness: 150, damping: 12 })

  return (
    <motion.span ref={ref} style={{ fontWeight }}>
      {letter}
    </motion.span>
  )
}

export default MagneticText
