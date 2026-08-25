// One candle. Tap to blow it out; isBlowing is the short shrink-then-smoke beat.
function Candle({ candleNumber, isLit, isBlowing, onBlowOut }) {
  const isOut = !isLit && !isBlowing

  return (
    <button
      type="button"
      className={`candle ${isLit ? 'is-lit' : ''} ${isBlowing ? 'is-blowing' : ''} ${isOut ? 'is-out' : ''}`}
      onClick={() => onBlowOut(candleNumber)}
      disabled={!isLit || isBlowing}
      aria-label={
        isBlowing
          ? `Blowing out candle ${candleNumber}`
          : isLit
            ? `Blow out candle ${candleNumber}`
            : `Candle ${candleNumber} is already out`
      }
    >
      <span className="flame-slot" aria-hidden="true">
        {(isLit || isBlowing) && (
          <span className={`flame ${isBlowing ? 'is-extinguishing' : ''}`} />
        )}
        {isOut && <span className="smoke" />}
      </span>
      <span className="wick" aria-hidden="true" />
      <span className="wax" aria-hidden="true" />
    </button>
  )
}

export default Candle
