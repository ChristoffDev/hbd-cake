import Candle from './Candle'

// CSS cake + the five candles. isClimax = extra sparkles after the last flame.
function BirthdayCake({ candles, onBlowOut, isCelebrating, isClimax }) {
  const sceneClass = [
    'cake-scene',
    isCelebrating ? 'is-celebrating' : '',
    isClimax ? 'is-climax' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={sceneClass}>
      <span className="sparkle sparkle-1" aria-hidden="true" />
      <span className="sparkle sparkle-2" aria-hidden="true" />
      <span className="sparkle sparkle-3" aria-hidden="true" />
      <span className="sparkle sparkle-climax sparkle-4" aria-hidden="true" />
      <span className="sparkle sparkle-climax sparkle-5" aria-hidden="true" />
      <span className="sparkle sparkle-climax sparkle-6" aria-hidden="true" />
      <span className="sparkle sparkle-climax sparkle-7" aria-hidden="true" />

      <div className="candles" role="group" aria-label="Birthday candles">
        {candles.map((candle) => (
          <Candle
            key={candle.id}
            candleNumber={candle.id}
            isLit={candle.isLit}
            isBlowing={candle.isBlowing}
            onBlowOut={onBlowOut}
          />
        ))}
      </div>

      <div className="cake" aria-hidden="true">
        <div className="frosting frosting-top">
          <span className="drip" />
          <span className="drip" />
          <span className="drip" />
          <span className="drip" />
          <span className="drip" />
          <span className="drip" />
        </div>
        <div className="layer layer-top" />
        <div className="frosting frosting-middle">
          <span className="drip" />
          <span className="drip" />
          <span className="drip" />
          <span className="drip" />
          <span className="drip" />
          <span className="drip" />
        </div>
        <div className="layer layer-bottom">
          <span className="ribbon" />
          <span className="cake-heart" />
        </div>
        <div className="plate" />
        <div className="plate-shadow" />
      </div>
    </div>
  )
}

export default BirthdayCake
