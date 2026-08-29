import { useEffect, useState } from 'react'

const FLOATERS = [
  { id: 1, type: 'heart', left: '2%', top: '8%' },
  { id: 2, type: 'balloon', left: '90%', top: '4%' },
  { id: 3, type: 'heart', left: '86%', top: '38%' },
  { id: 4, type: 'balloon', left: '-2%', top: '42%' },
  { id: 5, type: 'heart', left: '8%', top: '78%' },
  { id: 6, type: 'balloon', left: '82%', top: '72%' },
  { id: 7, type: 'heart', left: '48%', top: '-4%' },
]

const SPARK_COLORS = ['#e392a6', '#c9a36a', '#fffdfb', '#f0b7c4', '#e8d5a8', '#e07a90']
const SPARK_COUNT = 14
const RESPAWN_MS = 3000

function Burst() {
  return (
    <span className="floater-burst" aria-hidden="true">
      <span className="burst-flash" />
      {Array.from({ length: SPARK_COUNT }, (_, index) => (
        <span
          key={index}
          className={index % 3 === 0 ? 'burst-streak' : 'burst-spark'}
          style={{
            '--angle': `${(360 / SPARK_COUNT) * index + (index % 2) * 10}deg`,
            '--distance': `${26 + (index % 5) * 10}px`,
            '--duration': `${0.52 + (index % 4) * 0.1}s`,
            backgroundColor: SPARK_COLORS[index % SPARK_COLORS.length],
          }}
        />
      ))}
    </span>
  )
}

function Floater({ item }) {
  const [popped, setPopped] = useState(false)

  useEffect(() => {
    if (!popped) {
      return undefined
    }

    const timer = window.setTimeout(() => {
      setPopped(false)
    }, RESPAWN_MS)

    return () => window.clearTimeout(timer)
  }, [popped])

  return (
    <button
      type="button"
      className={`letter-floater letter-floater-${item.type} ${popped ? 'is-popped' : ''}`}
      style={{ left: item.left, top: item.top, animationDelay: `${item.id * 0.35}s` }}
      onClick={() => setPopped(true)}
      disabled={popped}
      aria-label={item.type === 'heart' ? 'Pop heart' : 'Pop balloon'}
    >
      <span className="floater-shape">
        {item.type === 'heart' ? (
          <span className="floater-heart" />
        ) : (
          <>
            <span className="balloon-body" />
            <span className="balloon-knot" />
            <span className="balloon-string" />
          </>
        )}
      </span>
      {popped && <Burst />}
    </button>
  )
}

// Hearts and balloons around the letter. Pop one and it comes back after 3s.
function LetterFloaters() {
  return (
    <div className="letter-floaters">
      {FLOATERS.map((item) => (
        <Floater key={item.id} item={item} />
      ))}
    </div>
  )
}

export default LetterFloaters
