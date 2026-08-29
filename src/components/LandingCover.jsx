// Curtain in front of the cake. Pull the rope to raise it and start the song.
function LandingCover({ cover, isLeaving, onStart }) {
  return (
    <div
      className={`landing-cover ${isLeaving ? 'is-leaving' : ''}`}
      aria-hidden={isLeaving}
    >
      <span className="curtain-rail" aria-hidden="true" />
      <div className="curtain-cloth">
        <span className="curtain-valance" aria-hidden="true" />

        <div className="landing-cover-copy">
          <p className="landing-cover-kicker">{cover.kicker}</p>
          <h1 className="landing-cover-title">{cover.title}</h1>
          <p className="landing-cover-volume">{cover.volumeTip}</p>
        </div>

        <button
          type="button"
          className="curtain-rope"
          onClick={onStart}
          disabled={isLeaving}
          tabIndex={isLeaving ? -1 : 0}
          aria-label="Pull the curtain to open"
        >
          <span className="rope-line" aria-hidden="true" />
          <span className="rope-tassel" aria-hidden="true">
            <span className="tassel-head" />
            <span className="tassel-fringe" />
          </span>
          <span className="rope-label">{cover.hint}</span>
        </button>
      </div>
    </div>
  )
}

export default LandingCover
