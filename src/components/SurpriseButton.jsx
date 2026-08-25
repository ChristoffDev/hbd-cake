// "Open My Letter" — hidden with CSS after she opens it so the fade can play.
function SurpriseButton({ label, onOpen, isHidden }) {
  return (
    <button
      type="button"
      className={`surprise-button ${isHidden ? 'is-hidden' : ''}`}
      onClick={onOpen}
      disabled={isHidden}
      aria-hidden={isHidden}
      tabIndex={isHidden ? -1 : 0}
    >
      {label}
    </button>
  )
}

export default SurpriseButton
