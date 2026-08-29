// Decorative balloons beside the cake. They float when confetti starts.
function CakeBalloon({ tone, size = 'md', position, isFloating }) {
  return (
    <div
      className={`cake-balloon cake-balloon-${position} cake-balloon-${tone} cake-balloon-${size} ${isFloating ? 'is-floating' : ''}`}
      aria-hidden="true"
    >
      <span className="balloon-body" />
      <span className="balloon-knot" />
      <span className="balloon-string" />
    </div>
  )
}

export default CakeBalloon
