import { useEffect, useRef, useState } from 'react'
import BirthdayHeader from './components/BirthdayHeader'
import BirthdayCake from './components/BirthdayCake'
import Celebration from './components/Celebration'
import SurpriseButton from './components/SurpriseButton'
import BirthdayMessage from './components/BirthdayMessage'
import MusicToggle from './components/MusicToggle'
import { birthdayConfig } from './config'
import './App.css'

// Flow: blow out candles → short pause → "Wish granted" + confetti → open letter
const startingCandles = [
  { id: 1, isLit: true, isBlowing: false },
  { id: 2, isLit: true, isBlowing: false },
  { id: 3, isLit: true, isBlowing: false },
  { id: 4, isLit: true, isBlowing: false },
  { id: 5, isLit: true, isBlowing: false },
]

const BLOW_MS = 300 // flame shrink before it goes out
const CLIMAX_MS = 800 // pause after the last candle, before "Wish granted"

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function App() {
  const [candles, setCandles] = useState(startingCandles)
  const [isLetterOpen, setIsLetterOpen] = useState(false)
  const [isWishGranted, setIsWishGranted] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const timersRef = useRef([])
  const audioRef = useRef(null)
  const userPausedRef = useRef(false)

  function motionDelay(ms) {
    return prefersReducedMotion() ? 0 : ms
  }

  async function playMusic() {
    const audio = audioRef.current
    if (!audio || !audio.paused || userPausedRef.current) {
      return
    }

    audio.volume = 0.42
    try {
      await audio.play()
      setIsPlaying(true)
    } catch {
      // Browser blocked autoplay until the next tap
    }
  }

  function toggleMusic() {
    const audio = audioRef.current
    if (!audio) {
      return
    }

    if (!audio.paused) {
      userPausedRef.current = true
      audio.pause()
      setIsPlaying(false)
      return
    }

    userPausedRef.current = false
    playMusic()
  }

  function blowOutCandle(id) {
    playMusic()

    // isBlowing plays the flame-out animation; isLit flips after BLOW_MS
    setCandles((currentCandles) =>
      currentCandles.map((candle) =>
        candle.id === id ? { ...candle, isBlowing: true } : candle
      )
    )

    const timer = window.setTimeout(() => {
      setCandles((currentCandles) =>
        currentCandles.map((candle) =>
          candle.id === id
            ? { ...candle, isLit: false, isBlowing: false }
            : candle
        )
      )
    }, motionDelay(BLOW_MS))

    timersRef.current.push(timer)
  }

  function openLetter() {
    playMusic()
    setIsLetterOpen(true)
  }

  const remaining = candles.filter((candle) => candle.isLit).length
  const allOut = candles.every((candle) => !candle.isLit && !candle.isBlowing)
  const isClimax = allOut && !isWishGranted // last flame is gone, title hasn't changed yet

  useEffect(() => {
    if (!allOut || isWishGranted) {
      return undefined
    }

    const timer = window.setTimeout(() => {
      setIsWishGranted(true)
    }, motionDelay(CLIMAX_MS))

    return () => window.clearTimeout(timer)
  }, [allOut, isWishGranted])

  useEffect(() => {
    const timers = timersRef.current
    return () => {
      timers.forEach((timer) => window.clearTimeout(timer))
    }
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) {
      return undefined
    }

    let cancelled = false
    audio.volume = 0.42

    function unlock() {
      if (!cancelled) {
        playMusic()
      }
      window.removeEventListener('pointerdown', unlock)
      window.removeEventListener('keydown', unlock)
    }

    audio.play().then(
      () => {
        if (!cancelled) {
          setIsPlaying(true)
        }
      },
      () => {
        if (cancelled) {
          return
        }
        window.addEventListener('pointerdown', unlock)
        window.addEventListener('keydown', unlock)
      }
    )

    return () => {
      cancelled = true
      window.removeEventListener('pointerdown', unlock)
      window.removeEventListener('keydown', unlock)
    }
  }, [])

  const hint =
    remaining === candles.length
      ? birthdayConfig.blowHint
      : `${remaining} still glowing...`

  const pageClass = [
    'page',
    isClimax ? 'is-climax' : '',
    isWishGranted ? 'is-celebrating' : '',
    isLetterOpen ? 'is-letter-open' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <main className={pageClass}>
      <MusicToggle
        audioRef={audioRef}
        isPlaying={isPlaying}
        onToggle={toggleMusic}
      />
      {isWishGranted && <Celebration />}
      <BirthdayHeader
        kicker={birthdayConfig.kicker}
        title={isWishGranted ? birthdayConfig.wishGranted : birthdayConfig.title}
        subtitle={
          isWishGranted
            ? birthdayConfig.wishGrantedNote
            : birthdayConfig.wishPrompt
        }
        isCelebrating={isWishGranted}
        isClimax={isClimax}
      />
      <BirthdayCake
        candles={candles}
        onBlowOut={blowOutCandle}
        isCelebrating={isWishGranted}
        isClimax={isClimax}
      />
      {!allOut && <p className="blow-hint">{hint}</p>}
      {isWishGranted && (
        <div className={`reveal-stage ${isLetterOpen ? 'is-open' : ''}`}>
          <SurpriseButton
            label={birthdayConfig.surpriseButton}
            onOpen={openLetter}
            isHidden={isLetterOpen}
          />
          <BirthdayMessage
            letter={birthdayConfig.letter}
            isVisible={isLetterOpen}
          />
        </div>
      )}
    </main>
  )
}

export default App
