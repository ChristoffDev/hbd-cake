// Falling pieces for the "Wish granted" moment. Colors match the page palette.
const confettiPieces = [
  { id: 1, left: '6%', delay: '0s', duration: '2.3s', color: '#e392a6', shape: 'rect' },
  { id: 2, left: '12%', delay: '0.15s', duration: '2.6s', color: '#c9a36a', shape: 'circle' },
  { id: 3, left: '20%', delay: '0.05s', duration: '2.2s', color: '#fffdfb', shape: 'rect' },
  { id: 4, left: '28%', delay: '0.28s', duration: '2.7s', color: '#f0b7c4', shape: 'circle' },
  { id: 5, left: '36%', delay: '0.1s', duration: '2.4s', color: '#e8d5a8', shape: 'rect' },
  { id: 6, left: '44%', delay: '0.22s', duration: '2.5s', color: '#e392a6', shape: 'rect' },
  { id: 7, left: '52%', delay: '0s', duration: '2.8s', color: '#c9a36a', shape: 'circle' },
  { id: 8, left: '60%', delay: '0.18s', duration: '2.3s', color: '#f0b7c4', shape: 'rect' },
  { id: 9, left: '68%', delay: '0.08s', duration: '2.6s', color: '#fffdfb', shape: 'circle' },
  { id: 10, left: '76%', delay: '0.25s', duration: '2.4s', color: '#e8d5a8', shape: 'rect' },
  { id: 11, left: '84%', delay: '0.12s', duration: '2.7s', color: '#e392a6', shape: 'circle' },
  { id: 12, left: '90%', delay: '0.3s', duration: '2.2s', color: '#c9a36a', shape: 'rect' },
  { id: 13, left: '16%', delay: '0.35s', duration: '2.5s', color: '#f0b7c4', shape: 'rect' },
  { id: 14, left: '48%', delay: '0.4s', duration: '2.3s', color: '#fffdfb', shape: 'circle' },
  { id: 15, left: '72%', delay: '0.32s', duration: '2.6s', color: '#e8d5a8', shape: 'rect' },
  { id: 16, left: '94%', delay: '0.2s', duration: '2.4s', color: '#e392a6', shape: 'circle' },
  { id: 17, left: '2%', delay: '0.42s', duration: '2.5s', color: '#f0b7c4', shape: 'circle' },
  { id: 18, left: '24%', delay: '0.5s', duration: '2.7s', color: '#c9a36a', shape: 'rect' },
  { id: 19, left: '32%', delay: '0.38s', duration: '2.3s', color: '#fffdfb', shape: 'circle' },
  { id: 20, left: '40%', delay: '0.55s', duration: '2.6s', color: '#e392a6', shape: 'rect' },
  { id: 21, left: '56%', delay: '0.46s', duration: '2.4s', color: '#e8d5a8', shape: 'circle' },
  { id: 22, left: '64%', delay: '0.58s', duration: '2.8s', color: '#f0b7c4', shape: 'rect' },
  { id: 23, left: '80%', delay: '0.44s', duration: '2.5s', color: '#c9a36a', shape: 'circle' },
  { id: 24, left: '88%', delay: '0.52s', duration: '2.3s', color: '#fffdfb', shape: 'rect' },
]

function Celebration() {
  return (
    <div className="celebration" aria-hidden="true">
      {confettiPieces.map((piece) => (
        <span
          key={piece.id}
          className={`confetti confetti-${piece.shape}`}
          style={{
            left: piece.left,
            backgroundColor: piece.color,
            animationDelay: piece.delay,
            animationDuration: piece.duration,
          }}
        />
      ))}
    </div>
  )
}

export default Celebration
