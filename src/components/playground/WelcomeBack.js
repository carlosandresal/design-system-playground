/** @jsx jsx */
import { jsx } from "theme-ui"
import { PlaygroundViews, NavContext } from "../../context/NavContext"
import { useState, useEffect, useContext } from "react"
import useTweenMax from "../../animate/useTweenMax"
import { Power4 } from "gsap"

const getRandomPos = base => {
  return Math.random() * base - base / 2
}

export default props => {
  const { setPlaygroundView, setPlaygroundHeight } = useContext(NavContext)

  const [hasPlayed, setHasPlayed] = useState(false)
  useEffect(() => {
    setHasPlayed(true)
  }, [])

  const [tweenOutRef] = useTweenMax(
    0.25,
    hasPlayed
      ? {}
      : {
          scale: 0.01,
          opacity: 0,
          delay: 3,
          ease: Power4.easeIn,
          onComplete: () => {
            setPlaygroundView(PlaygroundViews.COMPLETE)
            setPlaygroundHeight(0)
          },
        }
  )

  return (
    <h2
      ref={tweenOutRef}
      sx={{ fontSize: "5vw", fontWeight: "normal", color: "primary" }}
    >
      {"Welcome Back!"
        .replace(/ /g, "\u00a0")
        .split("")
        .map((letter, i) => {
          const [tweenRef] = useTweenMax(0.75, {
            startAt: {
              x: getRandomPos(2000),
              y: getRandomPos(1000),
              z: getRandomPos(100),
              opacity: 0,
              rotation: getRandomPos(720),
              rotationX: getRandomPos(360),
              rotationY: getRandomPos(360),
            },
            x: 0,
            y: 0,
            z: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            opacity: 1,
            delay: 1 + Math.random() * 0.25,
            immediateRender: true,
            ease: Power4.easeOut,
          })

          return (
            <span
              key={"char" + i}
              ref={tweenRef}
              style={{ opacity: 0 }}
              sx={{ display: "inline-block", transformOrigin: "50% bottom" }}
            >
              {letter}
            </span>
          )
        })}
    </h2>
  )
}
