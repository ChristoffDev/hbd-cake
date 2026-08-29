import { useEffect, useRef, useState } from 'react'
import LetterFloaters from './LetterFloaters'

const FLOATER_IN_MS = 450
const LETTER_FOCUS_MS = 700

// The letter card. Copy comes from config.js.
function BirthdayMessage({ letter, isVisible }) {
  const letterRef = useRef(null)
  const [showFloaters, setShowFloaters] = useState(false)

  useEffect(() => {
    if (!isVisible) {
      setShowFloaters(false)
      return undefined
    }

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches
    const floaterDelay = reduceMotion ? 0 : FLOATER_IN_MS
    const focusDelay = reduceMotion ? 0 : LETTER_FOCUS_MS

    const floaterTimer = window.setTimeout(() => {
      setShowFloaters(true)
    }, floaterDelay)

    const focusTimer = window.setTimeout(() => {
      letterRef.current?.focus({ preventScroll: true })
    }, focusDelay)

    return () => {
      window.clearTimeout(floaterTimer)
      window.clearTimeout(focusTimer)
    }
  }, [isVisible])

  return (
    <div className={`letter-wrap ${isVisible ? 'is-visible' : ''}`}>
      {showFloaters && <LetterFloaters />}
      <article
        ref={letterRef}
        className={`birthday-letter ${isVisible ? 'is-visible' : ''}`}
        tabIndex={-1}
        aria-labelledby="letter-greeting"
        aria-hidden={!isVisible}
      >
        <h2 id="letter-greeting">{letter.greeting}</h2>

        {letter.photo && (
          <img
            className="letter-photo"
            src={letter.photo}
            alt={letter.photoAlt}
          />
        )}

        {letter.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}

        <p className="letter-signoff">{letter.signOff}</p>
        <p className="letter-from">{letter.from}</p>
      </article>
      {isVisible && letter.floaterTip && (
        <p className="letter-floater-tip">{letter.floaterTip}</p>
      )}
    </div>
  )
}

export default BirthdayMessage
