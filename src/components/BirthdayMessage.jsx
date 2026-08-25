import { useEffect, useRef } from 'react'

// The letter card. Copy comes from config.js.
function BirthdayMessage({ letter, isVisible }) {
  const letterRef = useRef(null)

  useEffect(() => {
    if (!isVisible) {
      return undefined
    }

    const letterElement = letterRef.current
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches
    const delay = reduceMotion ? 0 : 520

    const timeoutId = window.setTimeout(() => {
      // Move keyboard focus onto the letter without scrolling the header away
      letterElement?.focus({ preventScroll: true })
    }, delay)

    return () => window.clearTimeout(timeoutId)
  }, [isVisible])

  return (
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
  )
}

export default BirthdayMessage
