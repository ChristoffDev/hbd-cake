import { birthdayConfig } from '../config'

// Song starts from the cover tap. File lives in public/music.
function MusicToggle({ audioRef, isPlaying, isVisible, onToggle }) {
  return (
    <>
      <audio
        ref={audioRef}
        src={birthdayConfig.song}
        loop
        playsInline
        preload="auto"
      />
      {isVisible && (
        <button
          type="button"
          className={`music-toggle ${isPlaying ? 'is-playing' : ''}`}
          onClick={onToggle}
          aria-label={isPlaying ? 'Mute song' : 'Play song'}
        >
          {isPlaying ? '♪' : '♩'}
        </button>
      )}
    </>
  )
}

export default MusicToggle
