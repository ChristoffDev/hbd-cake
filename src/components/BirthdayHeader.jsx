// Title at the top. Switches from the birthday greeting to "Wish granted" in App.
function BirthdayHeader({ kicker, title, subtitle, isCelebrating, isClimax }) {
  return (
    <header
      className={`birthday-header ${isCelebrating ? 'is-celebrating' : ''} ${isClimax ? 'is-climax' : ''}`}
      aria-live="polite"
    >
      <p className="header-kicker">{kicker}</p>
      <h1>{title}</h1>
      <span className="header-ornament" aria-hidden="true">
        ✦
      </span>
      <p className="header-subtitle">{subtitle}</p>
    </header>
  )
}

export default BirthdayHeader
