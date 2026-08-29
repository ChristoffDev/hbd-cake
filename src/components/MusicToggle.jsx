import { birthdayConfig } from '../config'

// Song tries to start on load. File lives in public/music.
function MusicToggle({ audioRef, isPlaying, onToggle }) {
  return (
    <>
      <audio
        ref={audioRef}
        src={birthdayConfig.song}
        loop
        autoPlay
        playsInline
        preload="auto"
      />
      <button
        type="button"
        className={`music-toggle ${isPlaying ? 'is-playing' : ''}`}
        onClick={onToggle}
        aria-label={isPlaying ? 'Mute song' : 'Play song'}
      >
        {isPlaying ? '♪' : '♩'}
      </button>
    </>
  )
}

export default MusicToggle
